export default class CardComponent {
    constructor(novoBurger) {
        const cardsList = document.getElementById("cards-list");
        if (cardsList) {
            cardsList.innerHTML += this.render(novoBurger);
            this.addDeleteEventListener();
        }
    }
    render(novoBurger) {
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
                const target = event.currentTarget;
                const burgerId = target.getAttribute('data-id');
                if (burgerId) {
                    this.showDeleteConfirmationModal(burgerId);
                }
            });
        });
    }
    showDeleteConfirmationModal(burgerId) {
        var _a, _b, _c;
        // Cria o modal na propria pagina
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div class="modal fade show" id="deleteModal" tabindex="-1" style="display:block;" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="deleteModalLabel">Confirmação de Exclusão</h5>
                            <button type="button" class="close" id="closeModal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Tem certeza que deseja deletar este item?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" id="cancelDelete">Cancelar</button>
                            <button type="button" class="btn btn-danger" id="confirmDelete">Deletar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        // Fecha o modal
        const closeModal = () => {
            modal.remove();
        };
        (_a = document.getElementById('closeModal')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', closeModal);
        (_b = document.getElementById('cancelDelete')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', closeModal);
        // Confirma a exclusão do item
        (_c = document.getElementById('confirmDelete')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
            this.deleteBurger(burgerId);
            closeModal();
        });
    }
    deleteBurger(burgerId) {
        // Carrega a lista dos itens doo localStorage
        let burgers = this.getBurgersFromLocalStorage();
        // Encontra o índice do array para ser removido
        const index = burgers.findIndex((burger) => burger.id === burgerId);
        if (index !== -1) {
            burgers.splice(index, 1);
            localStorage.setItem('burgerArray', JSON.stringify(burgers));
            const burgerElement = document.getElementById(`burger-${burgerId}`);
            if (burgerElement) {
                burgerElement.remove();
            }
        }
    }
    // Carrega os itens do localStorage
    getBurgersFromLocalStorage() {
        const burgersJSON = localStorage.getItem('burgerArray');
        return burgersJSON ? JSON.parse(burgersJSON) : [];
    }
}
