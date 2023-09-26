/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  const newTitle = document.querySelector("h1");
  newTitle.innerText = "Nuovo titolo!";
  return newTitle;
};
changeTitle();
/* ESERCIZIO 2
          Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
       */

const addClassToTitle = function () {
  const newTitle = document.querySelector("h1");
  newTitle.classList.add("myHeading");
};
addClassToTitle();

/* ESERCIZIO 3
          Scrivi una funzione per che cambi il testo dei p figli di un div
         */

const changePcontent = function () {
  const allParagraphs = document.querySelectorAll("div p");
  for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].innerText = "Cambio il testo del paragrafo";
  }
  console.log(allParagraphs);
  return allParagraphs;
};
changePcontent();

/* ESERCIZIO 4
          Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
         */

const changeUrls = function () {
  let anchorLinked = document.querySelectorAll("a:not(footer a)");
  for (let i = 0; i < anchorLinked.length; i++) {
    const a = anchorLinked[i];
    a.setAttribute("href", "https://www.google.com");
  }
};
changeUrls();
/* ESERCIZIO 5
          Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
       */

const addToTheSecond = function () {
  const secondUl = document.querySelector("ul:nth-of-type(2)");
  const newLi = document.createElement("li");
  newLi.innerText = "Nuovo elemento";
  secondUl.appendChild(newLi);
};
addToTheSecond();
/* ESERCIZIO 6
          Scrivi una funzione che aggiunga un secondo paragrafo al primo div
       */

const addParagraph = function () {
  const firstDiv = document.querySelector("div");
  const newParagraph = document.createElement("p");
  newParagraph.innerText = "sono un nuovo paragrafo";
  firstDiv.appendChild(newParagraph);
};
addParagraph();
/* ESERCIZIO 7
          Scrivi una funzione che faccia scomparire la prima lista non ordinata
       */

const hideFirstUl = function () {
  const firsUl = document.getElementById("firstList");
  firsUl.remove();
};
hideFirstUl();
/* ESERCIZIO 8 
          Scrivi una funzione che renda verde il background di ogni lista non ordinata
         */

const paintItGreen = function () {
  const allUl = (document.querySelector("ul").style.backgroundColor = "green");
};
paintItGreen();
/* ESERCIZIO 9
          Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
         */
//
let myh1 = document.getElementsByClassName("myHeading");
const makeItClickable = function () {
  let myh1 = document.getElementsByClassName("myHeading");
  myh1.innerText = myh1.slice(0, -1);
};
myh1.onclick = makeItClickable;

/* ESERCIZIO 10
          Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
         */
const secondAnchor = document.querySelector("footer a");
const revealFooterLink = function () {
  const secondAnchor = document.querySelector("footer a");

  window.alert(secondAnchor);
};
secondAnchor.onclick = revealFooterLink;
/* ESERCIZIO 11
          Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
          La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
       */

// const generateTable = function () {
//   let newTable = document.getElementById("tableArea");
//   let structuredTable = document.createElement("table");
//   for (let i = 0; i < 6; i++) {
//     newTable.appendChild(structuredTable[i].insertRow);
//   }
// };
// generateTable();
/* ESERCIZIO 12
          Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
       */

/* ESERCIZIO 14
         Crea una funzione che nasconda le immagini della tabella quando eseguita
       */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
         Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
       */

/* EXTRA ESERCIZIO 16
         Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
       */

const deleteVowels = function () {};
