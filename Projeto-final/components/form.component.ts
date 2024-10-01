export default class FormComponent {
    constructor() {
        const form = document.getElementById("form-burger-container");

        if(form) form.innerHTML = this.render();
    }

    render() {
        return `
            <form id="burgerForm" class="form container-fluid mt-5" style="--bs-columns: 3" method="post">
                <div class="input-group">
                    <label class="input-form" for="imagem">Imagem (URL)</label>
                    <input type="url" class="form-control" id="imagem" name="imagem" required>
                </div> 
                <div class=" input-group">
                    <label class="input-form" for="nome">Nome do Produto</label>
                    <input type="text" class="form-control" id="nome" name="nome" placeholder="Ex: X-tudo" required/>
                </div>
                <div class="input-group">
                    <label class="input-form" for="preco">Valor</label>
                    <input type="number" class="form-control" id="preco" name="preco" placeholder="Ex: 20,90" required/>
                </div>   
                <div class="input-group">
                    <label class="input-form" for="ingredientes">Ingredientes</label>
                    <textarea class="form-control" id="ingredientes" name="ingredientes" required></textarea>
                </div>
                <div id=cadastrar>
                    <button type="submit" class="btn btn-outline-light" id="cadastrar">Cadastrar</button>
                </div>
            </form>
        `;
    }
}