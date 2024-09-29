export default class AboutImageComponent {
    constructor() {
        const aboutImage = document.getElementById("big-image");

        if(aboutImage) aboutImage.innerHTML = this.render();
    }

    render() {
        return `<img src="./assets/logo.svg" class="card-img-top" alt="logo da burgerland">`;
    }
}