import FooterComponent from "../components/footer.component.js";
import FormComponent from "../components/form.component.js";
import HeaderComponent from "../components/header.component.js";
const header = new HeaderComponent();
const form = new FormComponent();
const burgerForm = document.getElementById("burgerForm");
burgerForm === null || burgerForm === void 0 ? void 0 : burgerForm.addEventListener("submit", (event) => {
    var _a;
    event.preventDefault();
    const target = event.target; //mudar, pois não é pra ser any, tem que ser a tipagem correta
    /*Strings vazias não podem ser usadas com o 'parse', por isso o array de objetos nulo []. Tanto "??" quanto "||" fazem a mesma coisa nesse contexto*/
    const burgerArray = JSON.parse((_a = localStorage.getItem("burgerArray")) !== null && _a !== void 0 ? _a : "[]");
    const ingredientes = target === null || target === void 0 ? void 0 : target.elements["ingredientes"].value.split(", ");
    const burgerNome = (target === null || target === void 0 ? void 0 : target.elements["nome"].value).replace(" ", "-").toLowerCase();
    const uuid = `${burgerNome}-${Date.now()}`;
    burgerArray.push({
        id: uuid,
        fotoProduto: target === null || target === void 0 ? void 0 : target.elements["imagem"].value,
        nome: target === null || target === void 0 ? void 0 : target.elements["nome"].value,
        preco: target === null || target === void 0 ? void 0 : target.elements["preco"].value,
        descricao: ingredientes
    });
    localStorage.setItem("burgerArray", JSON.stringify(burgerArray));
    burgerForm.reset();
});
const footer = new FooterComponent();
