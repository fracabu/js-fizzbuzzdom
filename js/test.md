const costoMele = 2;
let testoMele = "3"
let numeroMele = parseInt(testoMele);
let prezzo = costoMele * numeroMele;
let nome = "2";
let hoFinitoLes = false;
hoFinitoLes = true;

let anni = 10;
anni = anni + 1;
anni = 10
let maggiorenne = anni > 18

if (anni > 18) {
    console.log("sei maggiorenne, shai " + anni + " anni")
} else {
    if (anni == 18) {
        console.log("boh, hai 18 anni")
    } else {
        console.log("sei minorenne, hai " + anni + " anni")
    }

}


let elementoCiao = document.getElementById("ciao")

elementoCiao.innerText=anni;
console.log(elementoCiao)


let divisione = 10 / 3;
let resto= 10 % 3
if(anni%3==0){
    console.log("multiplo di 3")
}else{
    console.log("non multiplo di 3")
}
console.log(i)