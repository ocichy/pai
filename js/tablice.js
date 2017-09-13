//tworzenie tablicy za pomocą literału tablicy
var kolory=['czerwony','zielony','czarny'];
console.log(kolory[0]);
//tworzenie tablicy za pomocą konstruktora array
var samochody=new Array('bmw','audi','ferrari');
console.log(samochody[0]);
console.log(samochody [samochody.length-1]);
console.log(samochody.length);
console.log(samochody);
//var nowy=prompt('Podaj nazwe samochodu');
//samochody[0]=nowy;
//console.log(samochody);
//tablica wielowymiarowa
var tab=new Array(
new Array ('Janusz','kowal','poznań'),
new Array ('troll','papier','wrocław'),
new Array ('anna', 'loral','krotoszyn')
);
console.log(tab[1][2]);
var imiona=['Janusz','Anna','Krystyna','Zenek'];
console.log(imiona);
var posortowane=imiona.sort();
console.log(posortowane);
var odwrotność=posortowane.reverse();
console.log(odwrotność);
console.log(odwrotność.indexOf('Krystyna'));
odwrotność.pop();
odwrotność.push('Nowy');
odwrotność.unshift('Pierwszy');
console.log(odwrotność);
//tablica z liczbami
var liczby=[1,2,20,190,-1,1000000];
liczby.sort(function(a,b) {
    return (a-b);
});
console.log(liczby);

//zad dom. utwórz formularz z loginem (text) i hasłem (password). Zapisz dane w tablicy. Wyświetl w nagłówku 2 stopnia. użytkownik podaje również kolor w jakim tekst ma byc wyswietlony





