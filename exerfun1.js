let peso = parseFloat(prompt("Digite seu peso em Kg:"))
let altura = parseFloat(prompt("Digite sua altura em Metros:"));
let imc;
function massaCorporal(parPeso,parAltura){
    return  parPeso/(parAltura*parAltura);
}
imc = massaCorporal(peso,altura)
alert(`O seu IMC é de ${imc.toFixed(2)}`);

















