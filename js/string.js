//string
var text='ZSK-Zespół Szkół Komunikacji';
console.log(text.length); //liczy liczbę znaków łącznie ze spacjami
var pierwszy=text.charAt(0); //pierwszy znak
console.log(pierwszy); //Z
var ostatni=text.charAt(text.length-1);
console.log(ostatni); //ostatni znak
console.log(text.charAt(9));

//ASCII
console.log(text.charCodeAt(0)); //kod znaku w ASCII
var duze=text.toUpperCase();
console.log(duze);
var male=text.toLowerCase();
console.log(male);
var duzaMale=text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
console.log(duzaMale);
var podaj=prompt("Podaj wartość:");
podaj=podaj.charAt(0).toUpperCase()+podaj.slice(1).toLowerCase();
console.log(podaj);
var elNaglowek=document.getElementById('naglowek');
elNaglowek.textContent=podaj;
var pom=podaj.substr(1,podaj.length - 2);
console.log(pom);
