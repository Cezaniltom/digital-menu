"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        var header = document.getElementById("header");
        if (header)
            header.innerHTML = this.render();
    }
    HeaderComponent.prototype.render = function () {
        return "\n            <nav class=\"navbar navbar-expand-lg navbar-light\">\n            <a class=\"navbar-brand\" href=\"index.html\"><img src=\"assets/logo.svg\" alt=\"Logo da pagina\"></a>\n            <div class=\"tittle\">BURGUER LAND</div>\n\n            <!--Button hamburguer collapse-->\n            <button class=\"navbar-toggler bg-light btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"  aria-controls=\"navbarNav\" aria-expanded=\"false\"><span class=\"navbar-toggler-icon\"></span></button>\n\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                <ul class=\"navbar-nav nav-pills px-5\">\n                    <li class=\"nav-item active px-4 mb-3\"><a href=\"index.html\" type=\"button\" class=\"btn btn-outline-light ml-4\">In\u00EDcio</a></li>\n                    <li class=\"nav-item active px-4 mb-3\"><a href=\"sobre.html\" type=\"button\" class=\"btn btn-outline-light ml-4\">Sobre n\u00F3s</a></li>\n                    <li class=\"nav-item\"><a href=\"cadastro.html\" type=\"button\" class=\"btn btn-outline-light ml-5\">Cadastrar Burger</a></li>\n                </ul>\n            </div>\n            </nav>\n        ";
    };
    return HeaderComponent;
}());
exports.default = HeaderComponent;
