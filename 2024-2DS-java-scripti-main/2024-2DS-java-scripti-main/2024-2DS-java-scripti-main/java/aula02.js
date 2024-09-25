let forma = 'Retangulo';
let base = 20;
let altura = 40;
 let areaRetangulo = altura * base;
let areaTriangulo = (altura * base) / 2;

//condicional se... então... 
if( forma === 'Retangulo'){
    console.log( areaRetangulo)
} else{
    console.log (areaTriangulo)
}

//bolean
const usuarioligado = true;
const contaPaga = false;

//truthy ou falsy
//0 -> false
//1 -> true

console.log(0 == false); // retorna verdadeiro(true)
console.log(''== false); // retorna verdadeiro (true)
console.log(1 == true); // retorna verdadeiro (true)

console.log(contaPaga == 1);

// undefined -> não definido
// null -> vazio ou nulo

let minhaVar;
let varNull = null;
let numero = 3;
let string = 'oi';

console.log( typeof minhaVar)
console.log(typeof varNull)
console.log( typeof numero)
console.log( typeof string)

//conversão implícita

const numeroNumber = 786
const numeroString = "786"

console.log( numeroNumber == numeroString) // comparando os valores
console.log( numeroNumber === numeroString) // comparando os tipos
console.log( numeroNumber + numeroString) // conversão implícita ( concatenação de sting)

//conversão explicita

console.log( numeroNumber + Number (numeroString))

const numeroConvertido = Number(numeroString)

console.log( numeroNumber + numeroConvertido)

const numeroConvertidoErrado = Number("456b")

console.log(numeroNumber + numeroConvertidoErrado)