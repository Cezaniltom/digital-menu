import CardComponent from "../components/card.component.js";
import FooterComponent from "../components/footer.component.js";
import HeaderComponent from "../components/header.component.js";
//const burgerArray: Array<Burger> | null = localStorage.getItem("burgerArray");
let burgerArray = [];
const burgerJSON = localStorage.getItem("burgerArray");
if (!burgerJSON) {
    localStorage.setItem("burgerArray", JSON.stringify(burgerArray));
}
else {
    burgerArray = JSON.parse(burgerJSON);
}
const header = new HeaderComponent();
for (let burger of burgerArray) {
    const card = new CardComponent(burger);
}
const footer = new FooterComponent();
