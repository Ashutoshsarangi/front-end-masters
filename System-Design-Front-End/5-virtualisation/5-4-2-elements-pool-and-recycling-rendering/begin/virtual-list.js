import {intersectionObserver} from "../../../utils/observer.js";

const MARGIN = 16;

const getObservers = () => [
    document.getElementById('top-observer'),
    document.getElementById('bottom-observer')
]

function getList() {
    return document.getElementById('virtual-list');
}

function getContainer() {
    return document.getElementById('container');
}

/**
 * Returns `data-y` attribute of the HTMLElement, if value is provided
 * additionally updates the attribute
 *
 * @param element {HTMLElement}
 * @param value {string | number}
 * @returns {?string}
 */
function y(element, value = undefined) {
    if (value != null) {
        element?.setAttribute('data-y', value);
    }
    return element?.getAttribute('data-y');
}

/**
 * Part 4.1 - Bottom Transitioning of updated elements
 *
 * 1. Move card elements to stacking context by rendering the as absolutely positioned items
 * 2. #virtual-list should become relative container for card elements
 * 3. Implement updateElement method for bottom recycling
 *   - it should cycle through all pool elements
 *   - Card (N + 1) should be assigned with Card(N) - y position
 *   - Use data-attributes to store positioning info
 *  4. Use CSS Transform to move elements down
 */
export class VirtualList {

    /**
     * @param root {HTMLElement}
     * @param props {{
     *    getPage: <T>(page: number) => Promise<T[]>,
     *    pageSize: number,
     *    getTemplate: (...args:any) => HTMLElement,
     *    updateTemplate: <T>(target: HTMLElement, datum:T) => void,
     * }}
     */
    constructor(root, props) {
        this.props = {...props};
        this.start = 0;
        this.end = 0;
        this.root = root;
        this.pool = [];
        this.poolLimit = this.props.pageSize * 2;
    }

    /**
     * Returns an HTML Representation of the component, should have the following structure:
     * #container >
     *    .top-observer+
     *    #virtual-list+
     *    #bottom-observer
     * @returns {string}
     */
    toHTML() {
        return `<div id="container">
        <div id="top-observer">Top Observer</div>
        <main id="virtual-list"></main>
        <div id="bottom-observer">Bottom Observer</div>
        </div>`.trim();
    }

    /**
     * Renders the content to the provided root container and runs
     * any additional side effects
     * @returns void
     */
    render() {
        this.root.innerHTML = this.toHTML();
        this.#effect()
    }

    /**
     * Registers Events / Observers, this function is run after initial render
     * @returns void
     */
    #effect() {
        intersectionObserver(
            getObservers(),
            this.#handleIntersection(),
            {}
        )
    }

    /**
     * Callback implementation for Top and Bottom Intersection observers
     * @return {IntersectionObserverCallback}
     */
    #handleIntersection() {
        return (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    if (id === 'top-observer') {
                        void this.#handleTopObserver()
                    } else if (id === 'bottom-observer') {
                        void this.#handleBottomObserver()
                    }
                }
            }
        }
    }

    /**
     * Handles Top Observer Intersection event
     * @returns Promise<void>
     */
    #handleTopObserver() {
    }

    /**
     * Handles Bottom Observer Intersection event
     * @returns Promise<void>
     */
    async #handleBottomObserver() {
        const list = getList();
        const data = await this.props.getPage(this.end++)
        const fragment = new DocumentFragment();
        const elements = data.map(datum => this.props.getTemplate(datum))
        elements.forEach(el => fragment.appendChild(el));
        if (this.pool.length < this.poolLimit) {
            this.pool.push(...elements)
            list.appendChild(fragment);
        } else {
            const [unchanged, recycled] = [
                this.pool.slice(this.props.pageSize, this.pool.length),
                this.pool.slice(0, this.props.pageSize)
            ];
            this.pool = [].concat(
                unchanged,
                recycled
            );
            this.#updateData(recycled, data)
            this.start++;
        }
        this.#updateElement("down");
    }

    /**
     * @return {void}
     */
    #updateData(elements, data) {
        for (let i = 0; i < elements.length; i++) {
            this.props.updateTemplate(elements[i], data[i]);
        }
    }

    #updateElement(direction) {
        // to implement
    }
}