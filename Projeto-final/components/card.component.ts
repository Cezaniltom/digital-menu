import Burger from "../models/burger";

export default class CardComponent {
    constructor(novoBurger: Burger) {
        const cardsList = document.getElementById("cards-list");

        if (cardsList) {
            cardsList.innerHTML += this.render(novoBurger);
            this.addDeleteEventListener(novoBurger.id); // Adicionar evento de deletar após renderizar
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

    addDeleteEventListener(burgerId: string) {
        const deleteButton = document.querySelector(`.delete-btn[data-id="${burgerId}"]`);
        
        if (deleteButton) {
            deleteButton.addEventListener('click', () => {
                this.deleteBurger(burgerId);
            });
        }
    }

    deleteBurger(burgerId: string) {
        console.log(`Deletando burger com ID: ${burgerId}`);

        // Remover o elemento do DOM
        const burgerElement = document.getElementById(`burger-${burgerId}`);
        if (burgerElement) {
            burgerElement.remove();
        }
    }
}





// import Burger from "../models/burger";

// export default class CardComponent {
//     constructor(novoBurger: Burger) {
//         const cardsList = document.getElementById("cards-list");

//         if(cardsList) cardsList.innerHTML += this.render(novoBurger);
//     }

//     render(novoBurger: Burger) {
//         const ingredientes = novoBurger.descricao.join(", ");

//         return `
//             <div class="col">
//                 <div class="card" style="width: 100%; height:100%">
//                     <img src="${novoBurger.fotoProduto}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                         <h5 class="btn-title">${novoBurger.nome}</h5>
//                         <p class="card-text">${ingredientes}.</p>
//                     </div>
//                     <div class="mb-5">
//                         <h4 class="price">R$ ${novoBurger.preco}</h4>
//                         <a href="/update.html?id=${novoBurger.id}" type="button" class="btn btn-warning"><i class="fa fa-pencil"></i>&ensp;Editar</a>&ensp;
//                         <a type="button" class="btn btn-danger delete-btn" id="data-id"><i class="fa fa-trash"></i>&ensp;Deletar</a>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }
// }