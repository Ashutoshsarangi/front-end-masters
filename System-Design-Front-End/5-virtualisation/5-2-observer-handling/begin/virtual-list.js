import { intersectionObserver } from "../../../utils/observer.js";

function getObservers() {
  return [
    document.getElementById("bottom-observer"),
    document.getElementById("top-observer"),
  ];
}

/**
 * Part 2 - Register Bottom Observer
 *
 * 1. Create a IntersectionObserver callback #handleIntersectionObserver
 * 2. Extract id of the element from the intersection entry
 * 3. based on the id (bottom or top) - run required callback
 * 3.1 Create empty handleTopObserver method
 * 3.2 Create empty handleBottomObserver method
 * 4. Inside #effect method, register the observer
 */
export class VirtualList {
  /**
   * @param root
   * @param props {{}}
   */
  constructor(root, props) {
    this.props = { ...props };
    this.root = root;
  }

  /**
   * Returns an HTML Representation of the component, should have the following structure:
   * #container>
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
  async #handleBottomObserver() {}

  /**
   * Handles Top Observer Intersection event
   * @returns Promise<void>
   */
  async #handleTopObserver() {}

  /**
   * Renders the content to the provided root container and runs
   * any additional side effects
   * @returns void
   */
  render() {
    this.root.innerHTML = this.toHTML();
    this.#effect();
  }
}
