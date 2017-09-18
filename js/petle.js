//********************    pętle for   ******************
/*for (var i = 0; i <= 10; i++){
     document.write(i);
     if (i == 6){
         break;
     }
 }*/

 //losuj 10 liczb z przedziału od <10;100>
 /*for (var i = 0; i <= 10; i++){
     document.write(Math.floor(Math.random() * 91 + 10) + '<br>');
 }*/

 /*for (var i = 1; i <= 10; i++){
     if(i == 1){
         document.write(i + ' raz<br>');
     }else{
         document.write(i + ' razy<br>');
     }
 }*/


 /*Użytkownik podaje z kalwiatury wartość  początkową i końcową pętli, po każdej liczbie dodaj przecinek a tylko po ostatniej liczbie dodaj kropkę. Pierwsza liczba musi byćmniejsza od drugiej.*/

// var i = prompt('Podaj wartość początkową');
// var j = prompt('Podaj wartość końcową');
// i = parseInt(i);
// j = parseInt(j);
//
// if (i < j){
//     for(; i <= j; i++){
//         if(i != j ){
//            document.write(i + ', ');
//         }else{
//             document.write(i + '.')
//         }
//      }
// }else{
//     alert('Błędne dane!');
// }
//

//var=i;
//while (i++<5) {
//    document.write(i+'<br>');
//}

//var x=0, y=0;
//while (x>=y) {
//    x=prompt("podaj x");
//    y=prompt("podaj y");
//}
//document.write('Podales poprawne wartosci: <br>'+'x = '+x+"<br>a y= "+y);

//Wykorzystaj pętle for i do while. Podaj 5 liczb podzielnych przez 2 z klawy. zapisz je do tablicy i  wyswietl w konsoli.

/*var a;
var x;
var tab=new Array(5);

for (var i=0;i<=4;i++) {
do {
    x=prompt("wpisz liczbę: ");
    x=parseInt(x);
}while (x%2!=0);
    tab[i]=x;
}
console.log(tab);*/

/*Użytkownik podaje z klawy liczbe, zabezpiecz przed podaniem litery lub znaku specjalnego */

/*document.write('<input type="text" id="liczba">');
document.write('<button id="przycisk">wyślij</button>');
var elPrzycisk=document.getElementById('przycisk');
var elLiczba=document.getElementById('liczba');
elPrzycisk.onclick=function(){
    var wartosc=elLiczba.value;
    if (!isNaN(wartosc)) {
        console.log(wartosc);
    }
}
    */

/*Program wyświetlający liczby od 1 do 10 w 5 rzędach. Po każdej liczbie ma być przecinek, a po ostatniej w każdym rzędzie ma być kropkaoneone*/

/*
for (var i=0; i<=5; i++) {
    for (var x=1;x<11;x++) {
        if (x!=10)
            document.write(x+',');
        else
           document.write(x+'.');
    }
    document.write('<br>');
}
*/

/*var x;
var j;
for (x=1;x<10;x++) {
    for (j=1;j<x;j++) {
        document.write("*");
    }
    document.write("<br>");
}*/

/*użytkownik podaje login i hasełko z klawy w formularzu. jeśli login to admin a hasło tajne@123 to na ekranie wyświetli się w kolorze czerwonym: "Poprawne hasło"*/

/*var elLogin=document.getElementById('login');
var elHaslo=document.getElementById('haslo');
var elPrzycisk=document.getElementById('przycisk');
var elBlok=document.getElementById('blok');

elPrzycisk.onclick=function() {

    if (elLogin.value=='admin' && elHaslo.value=="tajne@123") {
        elBlok.style.color='red';
        elBlok.innerHTML='Poprawne haslo';
    }
}*/

 tab=['Anna','Jacek','Janusz','Adrian'];
/*for (var i=0; i<=tab.length-1;i++) {
    document.write(tab[i]+' ');
}*/

function p(a,b) {
    document.write(a+' ');
}
tab.forEach(p);
