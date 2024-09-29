export default class FooterComponent {
    constructor() {
        const footer = document.getElementById("footer");
        if (footer)
            footer.innerHTML = this.render();
    }
    render() {
        return `<div class="footer">Copyright © Cezaniltom Dev. 2024</div>`;
    }
}
