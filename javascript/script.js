/**
 * 
 * Descrizione:
 * 
 * Un alert() espone 5 numeri generati casualmente.
 * Da li parte un timer di 30 secondi.
 * Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
 * Dopo che sono stati inseriti i 5 numeri,
 * il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 * 
 * 
*/



// # FUNZIONI


let listaNumeri = [];

// genero 5 numeri randomici che non si ripetono tra 1 e 100

while ( listaNumeri.length < 5){
    let numeroRandomico = getRandomNumber(1,100);

    if( !listaNumeri.includes(numeroRandomico)){
        listaNumeri.push(numeroRandomico);
    }
}

alert("I numeri di oggi sono: " + listaNumeri + "!");

console.log(listaNumeri);



let tentativoUtente;
let listaTentativi = [];


for ( let i = 0; i < 5; i++){
    let tentativoUtente = parseInt(prompt("Inserisci uno dei numeri di oggi"));
    listaTentativi.push(tentativoUtente);
}

console.log(listaTentativi);

let match = listaNumeri.filter(i => listaTentativi.includes(i));

console.log("I numeri inseriti che corrispondono sono: " + match);
console.log("Hai indovinato " + match.length + " numeri su 5!");


// setTimeout(myFunction,3000);

function myfunction (){


}




// Generatore numero randomico
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}