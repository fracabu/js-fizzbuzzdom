/* 

-inserire funzione per stampare numeri da 1 a 100 in console

-SE multipli di 3 stampa FIZZ
-SE multipli di 5 stampa BUZZ
-ALTRIMENTI SE sia multipli di 3 che di 5 stampa FIZZBUZZ

*/



//inserire funzione per stampare numeri da 1 a 100 in console



for (let i = 0; i <= 100; i++) {

    console.log(i);


    if (i % 3 === 0 & i % 5 === 0){
        
        console.log("FizzBuzz");

    } else if (i % 3 === 0){
        
        console.log("Fizz");

    } else if (i % 5 === 0){

        console.log("Buzz");

    } 
    
    


}

/*
document.getElementById("box") 
const squareBox = document.getElementById("box")
squareBox.innerHTML = "box1" + "box2";


document.getElementById("").addEventListener()
*/

