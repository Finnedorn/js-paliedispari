/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

const words = document.getElementById('words');
let wordsarr = [];
const btn = document.getElementById('analyze');


btn.addEventListener('click', function() {

    let wordToAnalyze = words.value;
    console.log(wordToAnalyze);

    for(let i = 0; i < wordToAnalyze.length; i++) {
        wordsarr.push(wordToAnalyze[i]);
        console.log(wordsarr);
    };
    console.log(wordsarr);
    let wordRejoined = ReverseandJoin(wordsarr);

    const result = document.getElementById('result');
    if (wordToAnalyze == wordRejoined) {
        result.innerHTML = 'è un palindromo!'
    } else {
        result.innerHTML = 'non è un palindromo'
    };
});


/*
function PalAnalyzer() {
    
};
*/

function ReverseandJoin(word) {
    const wordReversed = word.reverse();
    const wordRejoined = wordReversed.join('');
    console.log(wordRejoined);
    return wordRejoined;
};

/*
function wordsCompare () {
    
};
*/

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (ovviamente usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (ovviamente  usando una funzione)
Dichiariamo chi ha vinto.
*/

const number = document.getElementById('number');
const btnplay = document.getElementById('play');


btnplay.addEventListener('click', function(){
    //richiamo il div dove riporterò il risultato
    const outcome = document.getElementById('outcome');

    //funzione che mi resetti al click i valori precedenti
    ResetForm(outcome)

    //vado a pescarmi il valore del selettore
    const selector = document.getElementById('selector').value;

    //mi pesco il valore del giocatore
    let numPlayer = parseInt(number.value);

    //valido che sia un numero da 1 a 5
    NumberValidator(numPlayer);

    //generami un numero per la cpu
    let numCpu = GetRndNumber(5);
    console.log(numPlayer, numCpu);

    //analizzami se la somma sia pari o dispari
    let msg = ResultAnalyzer(numPlayer, numCpu);
    console.log(msg);

    //se è pari o dispari scrivi il relativo msg
    if (msg == 'pari') {
        if( selector === 'even') {
            outcome.innerHTML = 'hai vinto!';
        } else {
            outcome.innerHTML = 'hai perso';
        };
    } else {
        if( selector === 'odd') {
            outcome.innerHTML = 'hai vinto!';
        } else {
            outcome.innerHTML = 'hai perso';
        };
    };
    //funzione che mi riporti i nuovi valori
    PrintOutcome(outcome);

});

//funzione per validare che il giocatore inserisca un num da 1 a 5 
function NumberValidator(num1) {
    if(num1 > 5) {
      return outcome.innerHTML = 'Scrivi un numero da 1 a 5';
    }
    
}
//funzione che estragga un valore per la cpu
function GetRndNumber(number) {
    let numCpu = Math.floor((Math.random() * number) + 1);
    return numCpu;
};

//funzione che mi determini se il risultato sia pari o dispari
function ResultAnalyzer(num1, num2) {
    let score = num1 + num2;
    let msg;
    if (score % 2 === 0) {
        msg = 'pari'
    } else { 
        msg = 'dispari'
    };
    return msg;
};

//creo le due funzioni di reset del form
function ResetForm(element){
    element.classList.remove('d-block')
    element.classList.add('d-none');
    element.innerHTML = '';
};

function PrintOutcome(element) {
    element.classList.remove('d-none');
    element.classList.add('d-block');
}