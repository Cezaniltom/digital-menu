export default class HeaderComponent {
    constructor() {
        const header = document.getElementById("header");

        if(header) header.innerHTML = this.render();
    }

    render() {
        return `
            <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="index.html"><img src="assets/logo.svg" alt="Logo da pagina"></a>
            <div class="tittle">BURGUER LAND</div>

            <!--Button hamburguer collapse-->
            <button class="navbar-toggler bg-light btn-light" type="button" data-toggle="collapse" data-target="#navbarNav"  aria-controls="navbarNav" aria-expanded="false"><span class="navbar-toggler-icon"></span></button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav nav-pills px-5">
                    <li class="nav-item active px-4 mb-3"><a href="index.html" type="button" class="btn btn-outline-light ml-4">Início</a></li>
                    <li class="nav-item active px-4 mb-3"><a href="sobre.html" type="button" class="btn btn-outline-light ml-4">Sobre nós</a></li>
                    <li class="nav-item"><a href="cadastro.html" type="button" class="btn btn-outline-light ml-5">Cadastrar Burger</a></li>
                </ul>
            </div>
            </nav>
        `;
    }
}