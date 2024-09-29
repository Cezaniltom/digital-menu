export default class AboutComponent {
    constructor() {
        const aboutus = document.getElementById("about");
        if (aboutus)
            aboutus.innerHTML = this.render();
    }
    render() {
        return `
            <div id="introducao" class="card-about">
                <p class="descricao">
                    &emsp;Bem-vindo ao Burger Land, o seu destino definitivo para uma experiência de hambúrgueres artesanais que vai muito além do convencional. Fundada com a missão de transformar o simples ato de comer um hambúrguer em uma verdadeira celebração de sabores, a Burger Land é o lugar onde a paixão pela comida se encontra com a inovação culinária.
                </p>
            </div>

            <div id="historia" class="card-about">
                <h3>Nossa História</h3>
                <p class="descricao">
                    &emsp;A história da Burger Land começa com um amor inabalável por hambúrgueres artesanais e uma visão clara: criar uma hamburgueria que não apenas serve excelentes hambúrgueres, mas que também proporciona uma experiência memorável a cada visita. Desde o nosso lançamento, trabalhamos com dedicação para trazer um conceito único ao mercado, misturando receitas clássicas com toques modernos e ingredientes de alta qualidade.
                </p>
            </div>

            <div id="conceito" class="card-about">
                <h3>Nosso Conceito</h3>
                <p class="descricao">
                    &emsp;Na Burger Land, acreditamos que o hambúrguer é uma forma de arte. Cada um de nossos hambúrgueres é elaborado com ingredientes frescos e selecionados, preparados no dia para garantir sabor e qualidade excepcionais. Usamos apenas carnes 100% bovinas, sem aditivos ou conservantes, e nossos pães são feitos artesanalmente, garantindo uma textura perfeita e um sabor inigualável. 
                    <br><br>
                    &emsp;Nosso menu é uma celebração da criatividade culinária. Oferecemos uma ampla variedade de opções, desde combinações clássicas, como o Cheeseburger e o Bacon Burger, até criações exclusivas, como o Burger Land Special, que mistura ingredientes inesperados em uma explosão de sabores. Além disso, nossa cozinha também é adaptável às necessidades dietéticas especiais, oferecendo opções vegetarianas e veganas que são igualmente deliciosas.
                </p>
            </div>

            <div id="ambiente" class="card-about">
                <h3>Ambiente e Experiência</h3>
                <p class="descricao">
                    &emsp;O ambiente da Burger Land foi cuidadosamente projetado para criar um espaço acolhedor e convidativo. Com uma decoração moderna e casual, nosso restaurante é o lugar ideal para um almoço descontraído, um jantar com amigos ou uma celebração especial. Nossa equipe está sempre pronta para oferecer um atendimento amigável e personalizado, garantindo que cada visita seja uma experiência agradável e memorável.
                </p>
            </div>
            
                
            <div id="compromisso" class="card-about">
                <h3>Nosso Compromisso</h3>
                <p class="descricao">
                    &emsp;Na Burger Land, estamos comprometidos com a excelência em todos os aspectos do nosso negócio. Isso inclui não apenas a qualidade dos alimentos, mas também a sustentabilidade e o respeito pelo meio ambiente. Trabalhamos com fornecedores locais e adotamos práticas ecológicas sempre que possível, desde a redução de resíduos até o uso de embalagens sustentáveis.
                </p>
            </div>

            <div id="vemComAGente" class="card-about">
                <h3>Junte-se a Nós</h3>
                <p class="descricao">
                    &emsp;Se você é um amante de hambúrgueres em busca de uma nova experiência ou simplesmente quer desfrutar de um clássico bem feito, a Burger Land é o seu lugar. Venha nos visitar e descubra por que somos apaixonados por hambúrgueres e como transformamos cada mordida em um momento de prazer.
                    <br><br>
                    &emsp;Obrigado por escolher a Burger Land. Esperamos vê-lo em breve e compartilhar com você a nossa paixão pela boa comida e pelo excelente atendimento!
                    <br><br>
                    &emsp;Burger Land – Onde o hambúrguer se torna uma experiência inesquecível.
                </p>
            </div>
        `;
    }
}
