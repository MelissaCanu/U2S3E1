/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let area = function (l1, l2) {
  const areaRettangolo = l1 * l2;
  return areaRettangolo;
};

console.log("area", area(3, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let crazySum = function (nInt, nInt2) {
  const sommaInt = nInt + nInt2;
  if (nInt !== nInt2) {
    return sommaInt;
  } else {
    return sommaInt * 3;
  }
};

console.log("valore medesimo", crazySum(2, 2));
console.log("valore diverso", crazySum(2, 4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const valoreFisso = 19;
let crazyDiff = function (numAbs) {
  const diffAbs = Math.abs(numAbs - valoreFisso);
  if (diffAbs <= valoreFisso) {
    return diffAbs;
  } else {
    return diffAbs * 3;
  }
};

console.log("absMinoreUguale19", crazyDiff(2, valoreFisso));
console.log("absMaggiore19", crazyDiff(-2, valoreFisso));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    /* ricordati === invece di = */ /* !!!! */
    return true;
  }
  return false;
};

console.log(boundary(20));
console.log(boundary(10));
console.log(boundary(400));
console.log(boundary(99));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let epify = function (string) {
  if (string.startsWith("EPICODE")) {
    return string;
  } else {
    return "EPICODE " + string;
  }
};

console.log(epify("EPICODE is hard, innit"));
console.log(epify("doesn't start with that word"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let check3and7 = function (nPos) {
  if (nPos % 3 === 0) {
    return "è un multiplo di 3";
  } else if (nPos % 7 === 0) {
    return "è un multiplo di 7";
  } else {
    return "non è un multiplo di 3 o 7";
  }
};

console.log(check3and7(14));
console.log(check3and7(4));
console.log(check3and7(9));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
