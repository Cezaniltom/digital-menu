export type Ingredientes = "Pão brioche" | "Pão australiano" | "Alface" | "Tomate" | "Cebola" | "Rúcula" | "Cebola caramelizada" | "Picles" | "Picles de cebola roxa" | "Bacon" | "Farofa de bacon" | "Queijo muçarela" | "Queijo cheddar" | "Blend artesanal de carne" | "Blend artesanal de porco" | "Carne do sol" | "Maionese da casa" | "Molho ranch" | "Barbecue" | "Mostarda de dijon";

export default interface Burger {
    id: string;
    fotoProduto: string,
    nome: string,
    preco: number,
    descricao: Ingredientes[],
}