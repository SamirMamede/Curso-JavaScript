/* Pratique

window.alert('Minha primeira mensagem !')
window.confirm('Está gostando de JS ?') // Janela com botão Ok e cancel
window.prompt('Qual é o seu nome ?') //Vai perguntar o nome, que terá que ser digitado pelo usuário

*/


// tipos primitivos

/*
// boolean, são "verdadeiro" e "falso"
var VouF = false;
console.log(VouF);

// typeof* retorna o tipo da variável

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer)); // aqui o console vai retornar "number" e não "1", por conta do typeof 

// string
var nome = 'Samir';
console.log(nome); */
/*
var escopoGlobal = 'global'
console.log(escopoGlobal)

function escopoLocal() {
    let escopoLocalInterno = 'local'
    console.log(escopoLocalInterno)
}
escopoLocal()

//atribuição
var atribuicao = 'Samir' // o sinal de '=' quer dizer recebe, lendo fica: var atribuição recebe Samir.

//comparação
var comparacao = '0' == 0 // o sinal de '==' está comparando, se forem iguais a reposta será true, caso contrário false.
console.log(comparacao)

//comparação idêntica
var comparacaoIdentica = '0' === 0 // comparação identica com 3 sinais de '=', compara também o tipo, nesse 
                                   // caso vai retornar FALSE, pois o primeiro é uma string, pois está entre aspas.
console.log(comparacaoIdentica)

//adição
var adicao = 1 + 1
console.log(adicao)

//subtração
var subtracao = 2 - 1
console.log(subtracao)

// multiplicação
var multiplicacao = 2 * 3
console.log(multiplicacao)

//divisão real
var divisaoReal = 6 / 2
console.log(divisaoReal)

//divisao inteira
var divisaoInteira = 5 % 2
console.log(divisaoInteira)

//potenciação
var potenciacao = 2 ** 10
console.log(potenciacao)
*/

/*
//maior que
var maiorQue = 5 > 2
console.log(maiorQue)

//menor que
var menorQue = 5 < 2
console.log(menorQue)

//maior igual
var maiorIgual = 5 >= 2
console.log(maiorIgual)

//menor igual
var menorIgual = 5 <= 2
console.log(menorIgual)
*/

//operadores lógicos
var e = true && true
console.log(e)

var ou = true || false
console.log(ou)

var nao = !true
console.log(nao)
 