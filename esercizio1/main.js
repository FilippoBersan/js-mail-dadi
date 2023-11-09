'use strict';

// Esercizio 1 Mail

// Chiedi all’utente la sua email,

// 1. creo prompt mail

let chiediEmail = prompt('Inserisci la tua email');

// 2. creo varie mail che possono accedere con array

let nomiMail = ['mailgiusta@boolean.com', 'mailsbagliata@boolean.com'];
console.log(nomiMail);

// 3. se è nella lista può accedere

if (chiediEmail === nomiMail[0]) {
  console.log(chiediEmail, 'emailcorretta');
  alert('email corretta');
} else if (chiediEmail === nomiMail[1]) {
  console.log(chiediEmail, 'email sbagliata');
  alert('email sbagliata');
}
//  4) stampo in console
