import { intersectionObserver } from "../../../utils/observer.js";

const MARGIN = 16;

function getObservers() {
  return [
    document.getElementById("bottom-observer"),
    document.getElementById("top-observer"),
  ];
}
function getList() {
  return document.getElementById("virtual-list");
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
    element?.setAttribute("data-y", value);
  }
  return element?.getAttribute("data-y");
}
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
    this.props = { ...props };
    this.root = root;
    this.start = 0;
    this.end = 0;
    this.limit = props.pageSize * 2;
    this.pool = [];
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
    this.#effect();
  }

  /**
   * Registers Events / Observers, this function is run after initial render
   * @returns void
   */
  #effect() {
    intersectionObserver(getObservers(), this.#handleIntersection(), {});
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
          if (id === "top-observer") {
            void this.#handleTopObserver();
          } else if (id === "bottom-observer") {
            void this.#handleBottomObserver();
          }
        }
      }
    };
  }

  /**
   * Handles Bottom Observer Intersection event
   * @returns Promise<void>
   */
  async #handleBottomObserver() {
    const list = getList();
    const data = await this.props.getPage(this.end++);
    if (this.pool.length < this.limit) {
      const fragment = new DocumentFragment();
      data
        .map((datum) => this.props.getTemplate(undefined, datum))
        .forEach((el) => {
          fragment.appendChild(el);
          this.pool.push(el);
        });
      list.appendChild(fragment);
    } else {
      const [toRecycle, unChange] = [
        this.pool.slice(0, this.props.pageSize),
        this.pool.slice(this.props.pageSize),
      ];
      this.pool = unChange.concat(toRecycle);
      this.#updateData(toRecycle, data);
    }
    this.#updateElementPosition("down");
  }

  #updateData(element, data) {
    for (let i = 0; i < data.length; i++) {
      this.props.updateTemplate(element[i], data[i]);
    }
  }

  #updateElementPosition(direction) {
    const [top, bottom] = getObservers();

    if (direction == "down") {
      for (let i = 0; i < this.pool.length; i++) {
        const [prev, current] = [this.pool.at(i - 1), this.pool[i]];
        if (y(prev) == null) {
          y(current, 0);
        } else {
          const newY = y(prev) + MARGIN * 2 + prev.getBoundingClientRect.height;
          y(current, newY);
          current.style.transform = translateY(newY);
        }
      }
    } else if (direction == "top") {
    }
    const [first, last] = [this.pool[0], this.pool.at(-1)];
    const topY = y(first);
    const bottomY = y(last) + MARGIN * 2 + last.getBoundingClientRect.height;
    top.style.transform = translateY(topY);
    bottom.style.transform = translateY(bottomY);
  }

  /**
   * Handles Top Observer Intersection event
   * @returns Promise<void>
   */
  #handleTopObserver() {}
}
