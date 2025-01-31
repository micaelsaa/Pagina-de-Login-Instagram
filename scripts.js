/* 

[Variáveis] - É um pedaço da memoria do computador, que podemos guardar alguma coisa. MAS, 
temos que indentificar esse espaço com um nome.
- LET para criar variáveis.
 
[Função] - è um Pedaço de código que só vai ser executado quando for ordenado.
function + nome da função + () + {}

[Tempo] setInterval - Ele chama uma função de tempos em tempos.

[If & Ense] 
SE -> Faça isso
SE NÃO -> Faça isso

= -> atribuir ou colocar um valor dentro
== -> Comparando A com B
*/

let alunosdevClub = "joão, maria, jorge, pedro, lucas"
let numerodacasa = 345
let carrinhodecompra = "fone de ouvido jbl"


console.log(alunosdevClub)
console.log(carrinhodecompra)
console.log(numerodacasa)

let imagem = document.querySelector(".troca-imagem")

console.log(imagem)

function trocaImagem(){

    if(imagem.style.opacity ==0){
        imagem.style.opacity = 1
    } else {
        imagem.style.opacity = 0
    }
}


setInterval(trocaImagem,2000)
