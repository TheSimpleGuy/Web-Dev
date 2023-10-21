class Header {
    constructor () {
        let websiteHeader = null;
    }

    Create (p_sizeXY = []) {
        websiteHeader.style.b
        websiteHeader.style.cssText
        p_sizeXY
        HideWebsiteHeader();
    }


    visible () {
        return websiteHeader.style.visibility == "Visible";
    }

    Show (p_animate) {
        if(p_animate) {
            websiteHeader.style.top = websiteHeader.style.bottom;
        }

        websiteHeader.style.visibility = "Visible";
    }

    Hide () {
        websiteHeader.style.visibility = "Hidden";
    }
}

export const { Create } = new Header();
export const { visible, Show, Hide } = new Header();

//export const CreateWebsiteHeader = Header.prototype.CreateWebsiteHeader;