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
const btn = document.querySelector('button');


btn.addEventListener('click', function() {

    let wordToAnalyze = words.value;
    console.log(wordToAnalyze);

    for(let i = 0; i < wordToAnalyze.length; i++) {
        wordsarr.push(wordToAnalyze[i]);
        console.log(wordsarr);
    };

    


});


/*
function PalAnalyzer() {
    for(let i = 0; i < wordToAnalyze.length; i++) {
        wordsarr.push(wordToAnalyze[i]);
        console.log(wordsarr);
    };
    return console.log(wordsarr);
};
*/