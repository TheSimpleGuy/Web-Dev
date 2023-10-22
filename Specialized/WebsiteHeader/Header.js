//import { Parse } from '';
//import { WriteToFile } from '../../App.js';

class Header {
    static #headerCount = 0;

    constructor () {
        let websiteHeader = null;
        Header.#headerCount++;
    }

    Create (p_sizeXY = []) {
        const _className = ".header" + Header.#headerCount;
        this.websiteHeader.className += ".default";
        this.websiteHeader.className += _className;
        //websiteHeader.classList[1].cssText += Parse(_className);
        //WriteToFile("Test", `\n.${_className} {\n\n}\n`);
        console.log("RunningHeader");
        //p_sizeXY
        HideWebsiteHeader();
    }


    visible () {
        return this.websiteHeader.style.visibility == "Visible";
    }

    Show (p_animate) {
        if(p_animate) {
            websiteHeader.style.top = websiteHeader.style.bottom;
        }

        this.websiteHeader.style.visibility = "Visible";
    }

    Hide () {
        this.websiteHeader.style.visibility = "Hidden";
    }
}

module.exports = Header;
/*
module.exports.Header = Header;
module.exports.Header = Header;*/
/*
module.exports = Create } = new Header();
export const { visible, Show, Hide } = new Header();*/

//export const CreateWebsiteHeader = Header.prototype.CreateWebsiteHeader;