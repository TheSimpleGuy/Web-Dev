/**
 * @author SimpleGuy <thesimplecreatorguy@gmail.com>
 */

import { WebContent } from "/WebContent.js";

export class Container extends WebContent {
  static #instanceCount = 0;

  /**
   * @param {int} X Width, and Height Position relative to top left of webpage
   * @memberOf Web-Content
   */
  constructor() {
    console.log("Running Container...");

    super(WebContent.Type.Header);
    this.websiteHeader = document.createElement("div");
    const _className = ".header" + Container.#instanceCount;

    this.websiteHeader.classList.add("default");
    this.websiteHeader.classList.add(_className);
    super.Hide();

    Container.#instanceCount++;
  }
}
