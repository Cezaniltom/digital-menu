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
                <select class="form-control" id="nome" name="nome">
                    <option value="X-BURGER">X-BURGER</option>
                    <option value="X-FOME">X-FOME</option>
                    <option value="X-VEGAN">X-VEGAN</option>
                    <option value="X-MINI">X-MINI</option>
                    <option value="X-TUDO">"X-TUDO"</option>
                    <option value="X-MINI EM DOBRO">X-MINI EM DOBRO</option>
                    <option value="X-TRIPLO">X-TRIPLO</option>
                    <option value="X-TUDO EM DOBRO">X-TUDO EM DOBRO</option>
                    <option value="X-MODA DA CASA">X-MODA DA CASA</option>
                </select>
            </div>
            <div class="input-group mb-3">
                <label class="input-group-text" for="preco">Valor</label>
                <input type="number" class="form-control" id="preco" name="preco" placeholder="Ex: 20" required>
            </div>   
            <div class="input-group">
                <label class="input-group-text" for="ingredientes">Ingredientes</label>
                <textarea class="form-control" id="ingredientes" name="ingredientes" required></textarea>
            </div>
            <button type="submit" class="btn btn-outline-light mt-2">Cadastrar</button>
        `;
    }
}