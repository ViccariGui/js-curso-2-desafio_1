let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora Do Desafio";

function verificarConsole(){
    console.log ("O botão foi clicado")
}

function verificarAlert(){
    alert("Eu amo Js")
}
function verificarPrompt(){
    let cidade = prompt("Diga uma cidade do Brasil:")
    alert(`Estive em ${cidade} e lembrei de você`)
}

function verificarSoma(){
    let num1 = parseInt(prompt("Escolha um número"))
    let num2 = parseInt(prompt("Escolha outro número"))
    let soma = num1 + num2
    alert(`A soma dos dois números é ${soma}`)
}