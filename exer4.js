let num1 = parseInt(prompt("Digite um número"));
let num2 = parseInt(prompt("Digite outro número"));
let num3 = parseInt(prompt("Digite mais um número"));
function verificarSoma(){
    let media = (num1 + num2 + num3)/3
    alert(`A média dos três números é ${media.toFixed(2)}`)
}
verificarSoma(media)