import Burger from "../models/burger";

export default class CardComponent {
    constructor(novoBurger: Burger) {
        const cardsList = document.getElementById("cards-list");

        if(cardsList) cardsList.innerHTML += this.render(novoBurger);
    }

    render(novoBurger: Burger) {
        const ingredientes = novoBurger.descricao.join(", ");

        return `
            <div class="col">
                <div class="card" style="width: 100%; height:100%">
                    <img src="${novoBurger.fotoProduto}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="btn-title">${novoBurger.nome}</h5>
                        <p class="card-text">${ingredientes}.</p>
                    </div>
                    <div class="mb-5">
                        <h4 class="price">R$ ${novoBurger.preco},00</h4>
                        <button type="button" class="btn btn-warning"><i class="fa fa-pencil"></i>&ensp;Editar</button>&ensp;
                        <button type="button" class="btn btn-danger"><i class="fa fa-trash"></i>&ensp;Deletar</button>
                    </div>
                </div>
            </div>
        `;
    }
}