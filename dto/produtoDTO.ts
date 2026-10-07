export default interface produtoDTO{
    id_produto: number,
    descricao: string,
    validade?: Date,
    preco: number,
    qtd_estoque: number,
    qtd_min_estoque: number
}