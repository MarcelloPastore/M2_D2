/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let risposta1 = " i principali tipi di dati inseribili in JS sono: i numeri, o interi; \n le stringhe, o semplicemente del testo, le tringhe possono essere di lettere singole o addirittura testi interi e lunghissimi come questo;";
let risposta1_1 = "\n i numeri però hanno un limite di dimensione, con Bigint invece i numeri; \n poi c'è la possibilità di definire una tipologia di dato Booleano, roba per grandi;";
let risposta1_2 = "\n il dato nullo, quello vuoto si chiama Null;\n invece se lasci una variabile senza definirla si chiama proprio Undefined;\n ci sarebbero anche symbol e object ma li vedremo più in la \n\n";

console.log(("Risposta 1 : ")+ risposta1 + risposta1_1 + risposta1_2);

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let risposta2 = " JavaScript è la possibilità di controllo che ha bisogno il codice, puoi utilizzarlo per tutto quello che vuoi \n\n";
console.log(("Risposta 2 : ")+ risposta2 );

/* ESERCIZIO 3
 Scrivti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(("12 + 20 = ")+(12 + 20));

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;
console.log(("x = ") + x);

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Marcello";
console.log(("name = ")+ name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(("4 - x = ")+(4-x));

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'john'; let name2 = 'John'; 
console.log(("name1 uguale name2? ") + (name1 === name2));
console.log(("name1 uguale name2 minuscolo? ") + (name1 == name2.toLowerCase()));
