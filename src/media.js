export function media(notas) {
    if (notas.length === 0) {
        throw new Error("Não é possível calcular a média de um array vazio");
    }
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}