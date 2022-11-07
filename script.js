let notas = [];
let notasPonderadas = [];
let mediaAritmetica, mediaPonderada;
let pesos = [5, 3, 2];
let pesosTotal = 10;
let media


function NotasMedia(notas, media) {
    if (media == "A") {
        let soma = 0;
        notas.forEach(nota => {
            soma = soma + nota;
        })
        mediaAritmetica = soma / notas.length;
        console.log("Notas: " + notas)
        console.log("Media Aritmetica: " + mediaAritmetica)
    } else if (media == "P") {
        let contador = 0;
        let somaPonderadas = 0
        notas.forEach(x => {
            notasPonderadas.push(x * pesos[contador]);
            contador++;
        });
        notasPonderadas.forEach(nota => {
            somaPonderadas = somaPonderadas + nota
        });
        mediaPonderada = somaPonderadas / pesosTotal
        console.log("Notas: " + notas)
        console.log("Pesos: " + pesos)
        console.log("Media Ponderada:" + mediaPonderada)
    }

    return mediaAritmetica, mediaPonderada;
};

for (let i = 1; i < 4; i++) {
    notas.push(parseInt(prompt("Digite a " + i + "ª nota:")))
    if (i == 3) {
        media = prompt("A => Media aritmética | P => Media Ponderada")
    }
};

NotasMedia(notas, media);
