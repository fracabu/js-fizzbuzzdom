/* 

-inserire funzione per stampare numeri da 1 a 100 in console

-SE multipli di 3 stampa FIZZ
-SE multipli di 5 stampa BUZZ
-ALTRIMENTI SE sia multipli di 3 che di 5 stampa FIZZBUZZ

*/



//inserire funzione per stampare numeri da 1 a 100 in console

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 & i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);

}


letElementoBox = document.getElementById("box")
elementoBox.innerText=Fizz;
console.log(elementoBox);