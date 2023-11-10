'use strict';

// Esercizio 2 Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

// 1. genero un numero da 1 a 6 per il giocatore prompt

const giocatoreNumero = Math.floor(Math.random() * 6) + 1;

// 2. genero un numero da 1 a 6 per il computer
const computerNumero = Math.floor(Math.random() * 6) + 1;

// Stabilire il vincitore, in base a chi fa il punteggio più alto. 3) a chi e se il numero uscito è maggiore vince

if (giocatoreNumero > computerNumero) {
  console.log(`vince giocatore con il punteggio di ${giocatoreNumero} a 
  ${computerNumero} `);
} else if (computerNumero > giocatoreNumero) {
  console.log(`vince computer con il punteggio di ${computerNumero} a 
  ${giocatoreNumero} `);
} else {
  console.log('pareggio');
}
