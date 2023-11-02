/**
 * @author SimpleGuy <thesimplecreatorguy@gmail.com>
 */

export class WebContent {
  constructor(p_type) {
    this.type = WebContent.Type.Blank;
    Object.keys(WebContent.Type).forEach((p__type) => {
      if (isNaN(p_type) && p_type === p__type) this.type = p_type;
      if (p__type === Object.keys(WebContent.Type)[p_type - 1])
        this.type = p_type;
    });
  }

  static Type = {
    Blank: 1,
    Header: 2,
    Container: 3,
  };

  getType() {
    return this.type;
  }

  visible() {
    return this.websiteHeader.style.visibility == "Visible";
  }

  Show(p_animate) {
    if (p_animate) {
      websiteHeader.style.top = websiteHeader.style.bottom;
    }

    this.websiteHeader.style.visibility = "Visible";
  }

  Hide() {
    this.websiteHeader.style.visibility = "Hidden";
  }
}
