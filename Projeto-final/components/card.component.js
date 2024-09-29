"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardComponent = /** @class */ (function () {
    function CardComponent(novoBurger) {
        var cardsList = document.getElementById("cards-list");
        if (cardsList)
            cardsList.innerHTML += this.render(novoBurger);
    }
    CardComponent.prototype.render = function (novoBurger) {
        var ingredientes = novoBurger.descricao.join(", ");
        return "\n            <div class=\"col\">\n                <div class=\"card\" style=\"width: 100%; height:100%\">\n                    <img src=\"".concat(novoBurger.fotoProduto, "\" class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                        <h5 class=\"btn-title\">").concat(novoBurger.nome, "</h5>\n                        <p class=\"card-text\">").concat(ingredientes, ".</p>\n                    </div>\n                    <div class=\"mb-5\">\n                        <h4 class=\"price\">R$ ").concat(novoBurger.preco, "</h4>\n                        <button type=\"button\" class=\"btn btn-warning\"><i class=\"fa fa-pencil\"></i>&ensp;Editar</button>&ensp;\n                        <button type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i>&ensp;Deletar</button>\n                    </div>\n                </div>\n            </div>\n        ");
    };
    return CardComponent;
}());
exports.default = CardComponent;
