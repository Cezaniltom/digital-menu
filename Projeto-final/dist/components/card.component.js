export default class CardComponent {
    constructor(novoBurger) {
        const cardsList = document.getElementById("cards-list");
        if (cardsList)
            cardsList.innerHTML += this.render(novoBurger);
    }
    render(novoBurger) {
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
                        <h4 class="price">R$ ${novoBurger.preco}</h4>
                        <a href="/update.html?id=${novoBurger.id}" type="button" class="btn btn-warning"><i class="fa fa-pencil"></i>&ensp;Editar</a>&ensp;
                        <a type="button" class="btn btn-danger"><i class="fa fa-trash"></i>&ensp;Deletar</a>
                    </div>
                </div>
            </div>
        `;
    }
}
