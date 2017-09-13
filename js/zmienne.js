//document.write("test");
var imie='Janusz';
var nazwisko;
nazwisko = 'Nowak';
//document.write('Imię: '+imie + '<br>'+'Nazwisko: '+nazwisko);
var wiek1=19;
var wiek2=20;
var sredniWiek=(wiek1+wiek2)/2;
console.log('Średni wiek wynosi: '+sredniWiek);
//alert(sredniWiek);
var a=5,b='3';
var suma=a+b;
console.log(suma);
console.log(10-'20'+30); //20
console.log(10+'20'+30); //102030
var c=10;
var d=2.5;
console.log(typeof(c)); //określa typ zmiennej
console.log(typeof(imie));
var log=true;
console.log(typeof(log));
var x=null; //typ object
var y; //typ niezdefiniowany
console.log(typeof(x));
var dziesietna=20;
var oktalna=020;
var hex=0x20;
console.log(oktalna);
console.log(hex);
console.trace();
var name='Anna';
name=parseInt(name); //NAN;
console.log(name); //NAN;
var j='1';
j=parseInt(j);
console.log(j);
var k='3.999';
k=parseFloat(k);
console.log(k);
var age1=prompt('Podaj wiek:');
age1=parseInt(age1);
var age2=prompt('Podaj wiek2:');
age2=parseInt(age2);
var wynik=(age1+age2)/2;
console.log(wynik);
//document.getElementById('nag').innerHTML=wynik; //tak sie nie robi
var elNag=document.getElementById('nag');
elNag.innerHTML=wynik;
//elNag.style.color='red';
elNag.style.color=prompt('podaj kolor: ');

