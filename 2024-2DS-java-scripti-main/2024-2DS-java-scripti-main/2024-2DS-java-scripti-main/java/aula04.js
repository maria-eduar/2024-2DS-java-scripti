// funções

let x = 'nada'
console.log(x)
x = 'oi' 
imprimeTexto(x)
console.log(x)

// declarar uma função 
//etrutura nomeDaFunção (parâmentros){funcionalidade}
function imprimeTexto(texto){
    console.log(texto)
}

imprimeTexto ('Sou uma aluna de front-end')
imprimeTexto ('good morning')

function soma(){
    return 2+2 
}
imprimeTexto(soma())
//console.log(soma())
function somaDeNumeros( numero1, numero2){
    return numero1 + numero2
}
imprimeTexto(somaDeNumeros(10,8))

function divisaoDeNumeros(numero1, numero2){
    return numero1 / numero2
}
imprimeTexto(divisaoDeNumeros(15,3))
imprimeTexto(divisaoDeNumeros(3,15))

// Ordem de Pârametros 
function apresentacao(nome, idade){
    return  ` meu nome é${nome} e tenho ${idade} anos.`
}

imprimeTexto(apresentacao('duda', 15))
imprimeTexto(apresentacao(15, 'duda')) // A ordem dos parâmetros é importante

//parâmetro inicial, para que a função começe com um parâmetro pré-definido
function multiplicacap(n1 = 1 , n2 = 1 ){
    return n1* n2
}
imprimeTexto(multiplicacap(2, 5 ))