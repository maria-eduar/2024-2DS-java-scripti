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