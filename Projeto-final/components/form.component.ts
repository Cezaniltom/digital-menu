export default class FormComponent {
    constructor() {
        const form = document.getElementById("burgerForm");

        if(form) form.innerHTML = this.render();
    }

    render() {
        return `
            <div class="input-group mt-3 mb-2">
                <label class="input-group-text" for="imagem">Imagem (URL)</label>
                <input type="url" class="form-control p-1" id="imagem" name="imagem" required>
            </div> 
            <div class=" input-group mb-3">
                <label class="input-group-text" for="nome">Nome do Produto</label>
                <input type="text" class="form-control" id="nome" name="nome" placeholder="Ex: X-tudo" required/>
            </div>
            <div class="input-group mb-3">
                <label class="input-group-text" for="preco">Valor</label>
                <input type="number" class="form-control" id="preco" name="preco" placeholder="Ex: 20" required/>
            </div>   
            <div class="input-group">
                <label class="input-group-text" for="ingredientes">Ingredientes</label>
                <textarea class="form-control" id="ingredientes" name="ingredientes" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Cadastrar</button>
        `;
    }
}