import FooterComponent from "./components/footer.component.js";
import FormComponent from "./components/form.component.js";
import HeaderComponent from "./components/header.component.js";
import Burger, { Ingredientes } from "./models/burger";

const header = new HeaderComponent();
const form = new FormComponent();

const burgerForm: HTMLFormElement | null = (document.getElementById("burgerForm") as HTMLFormElement);

burgerForm?.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    const target = (event.target as any); //mudar, pois não é pra ser any, tem que ser a tipagem correta

    /*Strings vazias não podem ser usadas com o 'parse', por isso o array de objetos nulo []. Tanto "??" quanto "||" fazem a mesma coisa nesse contexto*/
    const burgerArray: Array<Burger> = JSON.parse(localStorage.getItem("burgerArray") ?? "[]"); 
    const ingredientes: Ingredientes[] = target?.elements["ingredientes"].value.split(", ")
    burgerArray.push({
        fotoProduto: target?.elements["imagem"].value,
        nome: target?.elements["nome"].value,
        preco: target?.elements["preco"].value,
        descricao: ingredientes
    });

    localStorage.setItem("burgerArray", JSON.stringify(burgerArray));

    burgerForm.reset();
});

const footer = new FooterComponent();