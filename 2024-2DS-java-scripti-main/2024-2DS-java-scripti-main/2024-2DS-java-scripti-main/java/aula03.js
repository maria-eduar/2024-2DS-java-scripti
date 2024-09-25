// alguns erros 

let numero = 12 // o javaScript é sensível ao capslook 
//console.log(Numero) // erro de declaração, variável não declarada 

//console.log(numero //Erro de sintaxe, faltas de parenteses

//Tratamento de erros 
//console.error ('a lista não esta executando a média') // declara um erro para outro usuário;

const idadeMinima = 18 
let idadeCliente = 17 
if(idadeCliente >= idadeMinima){
    console.log('bebida')
} else {
    console.log('suco')
}
//valor ternário 
idadeCliente = 20

// modo ternário, ____<= _______ ? -------- : --------
// modo ternário, ____<= _______ ? -------- : --------
console.log( idadeCliente >= idadeMinima ? ' cerveja' : 'suco')
                    // => uma função arrow, completamente diferente de maior igual



//utilizar com cuidado 

const nome = "duda"
const idade = 15
const cidadeNascimento = "foz do Iguaçu"

const apresentacao = " meu nome é "+ nome + " tenho" + idade + " anos e nasci em " + cidadeNascimento

console.log( apresentacao)

// template strig 
const apresentacaoII = `Sou o ${nome} e tenho ${idade} anos de idade. Nasci na cidade de ${cidadeNascimento}`

console.log( apresentacaoII)