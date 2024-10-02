import Burger from "../models/burger";

export default class CardComponent {
    constructor(novoBurger: Burger) {
        const cardsList = document.getElementById("cards-list");

        if (cardsList) {
            cardsList.innerHTML += this.render(novoBurger);
            this.addDeleteEventListener(); // Adicionar evento de deletar após renderizar
        }
    }

    render(novoBurger: Burger) {
        const ingredientes = novoBurger.descricao.join(", ");

        return `
            <div class="col" id="burger-${novoBurger.id}"> <!-- Identificador para a remoção -->
                <div class="card" style="width: 100%; height:100%">
                    <img src="${novoBurger.fotoProduto}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="btn-title">${novoBurger.nome}</h5>
                        <p class="card-text">${ingredientes}.</p>
                    </div>
                    <div class="mb-5">
                        <h4 class="price">R$ ${novoBurger.preco}</h4>
                        <a href="/update.html?id=${novoBurger.id}" type="button" class="btn btn-warning"><i class="fa fa-pencil"></i>&ensp;Editar</a>&ensp;
                        <a type="button" class="btn btn-danger delete-btn" data-id="${novoBurger.id}">
                            <i class="fa fa-trash"></i>&ensp;Deletar
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    addDeleteEventListener() {
        const deleteButtons = document.querySelectorAll('.delete-btn');
        
        deleteButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const target = event.currentTarget as HTMLElement;
                const burgerId = target.getAttribute('data-id');
                if (burgerId) {
                    this.deleteBurger(burgerId);
                }
            });
        });
    }

    deleteBurger(burgerId: string) {
        // Carregar a lista de burgers do localStorage
        let burgers = this.getBurgersFromLocalStorage();

        // Encontrar o índice do burger a ser removido
        const index = burgers.findIndex((burger: { id: string; }) => burger.id === burgerId);

        if (index !== -1) {
            // Remover o burger pelo índice
            burgers.splice(index, 1);

            // Atualizar o localStorage
            localStorage.setItem('burgerArray', JSON.stringify(burgers));

            // Remover o card do DOM
            const burgerElement = document.getElementById(`burger-${burgerId}`);
            if (burgerElement) {
                burgerElement.remove();
            }
        }
    }

    // Método para carregar burgers do localStorage
    getBurgersFromLocalStorage() {
        const burgersJSON = localStorage.getItem('burgerArray');
        return burgersJSON ? JSON.parse(burgersJSON) : [];
    }
}