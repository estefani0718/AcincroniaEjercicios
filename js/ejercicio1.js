//Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.

let desde = parseInt(prompt("ingrese un numero (desde)"));
let hasta = parseInt(prompt("ingrese un numero (hasta)"));


function imprimirNumeros(desde, hasta) {
  console.log("setInterval")
 let id = setInterval(() => {
   console.log(desde++);
   if (desde > hasta) clearInterval(id);
 }, 1000);
  
}
imprimirNumeros(desde, hasta);



function imprimirNu(desde, hasta) {
  console.log("setTimeout");
  let idT = setTimeout(function rep() {
    console.log(desde++);
    if (desde<hasta) {
      setTimeout(rep,1000)
    }
  }, 1000);

}
imprimirNu(desde, hasta);