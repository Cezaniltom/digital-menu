export type Ingredientes = "Pão brioche" | "Pão australiano" | "Alface" | "Tomate" | "Cebola" | "Rúcula" | "Cebola caramelizada" | "Picles" | "Picles de cebola roxa" | "Bacon" | "Farofa de bacon" | "Queijo muçarela" | "Queijo cheddar" | "Blend artesanal de carne" | "Blend artesanal de porco" | "Carne do sol" | "Maionese da casa" | "Molho ranch" | "Barbecue" | "Mostarda de dijon";
export type Nomes = "X-BURGER" | "X-FOME" | "X-VEGAN" | "X-MINI" | "X-TUDO" | "X-MINI EM DOBRO" | "X-TRIPLO" | "X-TUDO EM DOBRO" | "X-MODA DA CASA";

export default interface Burger {
    fotoProduto: string,
    nome: Nomes[],
    preco: number,
    descricao: Ingredientes[],
}