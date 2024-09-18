//tipo nunmber


// var era utilizado para todas as variaveis
const numero01 = 3
// let e uma atualização do var e é passivel de variação 
const numero02 = 10

// const é uma maneira de declarar uma variavel que irá permanecer constante
const numero03 = 7

const soma = numero01 + numero02
const subtração = numero02 - numero01
const multiplicacao = numero03 * numero01
const divisao = numero02 / numero03

console.log(soma)
console.log(subtração)
console.log(multiplicacao)
console.log(divisao)


//tipo float -- ponto flutuante 

const numero04 = 3.2
const numero05 = .5

console.log(numero05)

//NaN -> Not a number 

const nome = 'Duda'
const falsonumero ='7'

const naoEnumero = nome * 0.4
const concatenacao = falsonumero + numero04


console.log(naoEnumero)
console.log(concatenacao)

//dados do tipo String = textos

const frase = 'meu nome é' 
const frase2 = 'o segundo DS é "estudioso", não é?'

const concatenacao02 = frase + nome

console.log(concatenacao02)
console.log(frase2)

// dados do tipo Bolean
// True -> verdadeiro
// false -> falso 
 

const numero06 = 7

const comparacao01 = numero06 == falsonumero
const comparacao02 = numero06 === falsonumero 

// um sinal de igual (=) é para declarar 
//dois sinais de igual(==) comparando os valores e não o tipo do dado (comparacao fraca)
// tres sinais de igual (===) comparando os tipos de dado.(comparacao forte)



console.log(comparacao01)
console.log(comparacao02)

