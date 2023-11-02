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

    super(WebContent.Type.Container);
    this.container = document.createElement("div");
    const _className = ".header" + Container.#instanceCount;

    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "./Objects/Container/Container.css";
    document.getElementsByTagName("HEAD")[0].appendChild(link);

    this.container.style = document.getElementsByClassName("Container.css");
    this.container.classList.add("default");
    this.container.classList.add(_className);
    //super.Hide();

    Container.#instanceCount++;
  }
}
