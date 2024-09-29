"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        var footer = document.getElementById("footer");
        if (footer)
            footer.innerHTML = this.render();
    }
    FooterComponent.prototype.render = function () {
        return "<div class=\"footer\">Copyright \u00A9 Cezaniltom Dev. 2024</div>";
    };
    return FooterComponent;
}());
exports.default = FooterComponent;
