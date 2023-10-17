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
    console.log(wordsarr);
    ReverseandJoin();

    const result = document.getElementById('result');
    if (wordToAnalyze === wordRejoined) {
        result.innerHTML = 'è un palindromo!'
    } else {
        result.innerHTML = 'non è un palindromo'
    };
    console.log(msg);

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

function ReverseandJoin() {
    const wordReversed = wordsarr.reverse();
    const wordRejoined = wordReversed.join('');
    console.log(wordRejoined);
    return wordRejoined;
};

/*
function wordsCompare () {
    const result = document.getElementById('result');
    if (words.value == wordRejoined) {
        result.innerHTML = 'è un palindromo!'
    } else {
        result.innerHTML = 'non è un palindromo'
    };
    return msg;
    console.log(msg);
};
*/