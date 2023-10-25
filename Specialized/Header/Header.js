//import { Parse } from '';
//import { WriteToFile } from '../../App.js';
/**
 * @author SimpleGuy <thesimplecreatorguy@gmail.com>
 */

import { WebContent } from "/WebContent.js";

export class Header extends WebContent {
  static #instanceCount = 0;

  /**
   * @param {int} X Width, and Height Position relative to top left of webpage
   * @memberOf Web-Content
   */

  constructor(p_sizeXY = []) {
    console.log("Running Header...");

    super(WebContent.Type.Header);
    this.websiteHeader = document.createElement("div");
    const _className = ".header" + Header.#instanceCount;

    this.websiteHeader.classList.add("default");
    this.websiteHeader.classList.add(_className);
    //websiteHeader.classList[1].cssText += Parse(_className);
    //WriteToFile("Test", `\n.${_className} {\n\n}\n`);
    //p_sizeXY
    super.Hide();

    Header.#instanceCount++;
  }
}

//module.exports = Header;
/*
module.exports.Header = Header;
module.exports.Header = Header;*/
/*
module.exports = Create } = new Header();
export const { visible, Show, Hide } = new Header();*/

//export const CreateWebsiteHeader = Header.prototype.CreateWebsiteHeader;

//const header = new Hea();
