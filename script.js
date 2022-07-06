let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.Value;
    let criancas = inputCriancas.Value;
    let duracao = inputDuracao.Value;

    let qdtTotalCarne = carnePP(duracao) 400 * adultos + (carnePP(duracao) / 2 * criancas);
    console.log(qdtTotalCarne);
}

function carnePP(duracao){
    if (duracao >= 6) {
        return 650;
    }else{
        return 400;
    }
}

