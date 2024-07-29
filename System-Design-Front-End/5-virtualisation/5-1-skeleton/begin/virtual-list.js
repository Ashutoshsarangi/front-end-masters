/**
 * Part 1 - Building skeleton
 *
 * @todo
 * 1. Update toHTML to return the structure described in goal.png
 * 2. Run index.html to see if we render it
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
   *    #top-observer+
   *    #virtual-list+
   *    #bottom-observer
   * @returns {string}
   */
  toHTML() {
    /**
     * Part 1 - App Skeleton
     *
     * @todo
     * Create container div which will include:
     *   - top-observer
     *   - virtual-list
     *   - bottom-observer
     */

    `<div id="container">
            <div id="top-observer">Top Observer</div>
            <div id="virtual-list"></div>
            <div id="bottom-observer">Bottom Observer</div>
        </div>`.trim();
  }
  /**
   * @returns void
   */
  #effect() {}
  /**
   * @returns void
   */
  render() {
    this.root.innerHTML = this.toHTML();
    this.#effect();
  }
}
