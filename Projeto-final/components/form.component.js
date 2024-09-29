"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormComponent = /** @class */ (function () {
    function FormComponent() {
        var form = document.getElementById("burgerForm");
        if (form)
            form.innerHTML = this.render();
    }
    FormComponent.prototype.render = function () {
        return "\n            <div class=\"input-group\">\n                <label class=\"input-form\" for=\"imagem\">Imagem (URL)</label>\n                <input type=\"url\" class=\"form-control\" id=\"imagem\" name=\"imagem\" required>\n            </div> \n            <div class=\" input-group\">\n                <label class=\"input-form\" for=\"nome\">Nome do Produto</label>\n                <input type=\"text\" class=\"form-control\" id=\"nome\" name=\"nome\" placeholder=\"Ex: X-tudo\" required/>\n            </div>\n            <div class=\"input-group\">\n                <label class=\"input-form\" for=\"preco\">Valor</label>\n                <input type=\"number\" class=\"form-control\" id=\"preco\" name=\"preco\" placeholder=\"Ex: 20,90\" required/>\n            </div>   \n            <div class=\"input-group\">\n                <label class=\"input-form\" for=\"ingredientes\">Ingredientes</label>\n                <textarea class=\"form-control\" id=\"ingredientes\" name=\"ingredientes\" required></textarea>\n            </div>\n            <div id=cadastrar>\n                <button type=\"submit\" class=\"btn btn-outline-light\" id=\"cadastrar\">Cadastrar</button>\n            </div>\n        ";
    };
    return FormComponent;
}());
exports.default = FormComponent;
