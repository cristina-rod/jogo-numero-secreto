//para gerar uma lista deve-se usar colchetes
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// //primeiro trazer a tag em forma de variável para ser alterada pelo JS
// let titulo = document.querySelector('h1');
// //depois aplicar a alteração no HTML através do JS
// titulo.innerHTML = 'Jogo do número secreto';
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//Função criada com o objetivo de evitar repetição de códigos (EXIBIR TEXTO NA TELA) TEM PARÂMENTRO, MAS NÃO TEM RETORNO
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    // if ('speechSynthesis' in window) {
    //     let utterance = new SpeechSynthesisUtterance(texto);
    //     utterance.lang = 'pt-BR'; 
    //     utterance.rate = 1.2; 
    //     window.speechSynthesis.speak(utterance); 
    // } else {
    //     console.log("Web Speech API não suportada neste navegador.");
    // }    
}


function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

//a função deve ser chamada fora de onde foir criada, para que possa ser executada, pois criar a função é diferente de ativá-la
exibirMensagemInicial();

//FUNÇÃO PARA VERIFICAR INTERAÇÃO COM BOTÃO - NÃO TEM PARÂMETRO E NÃO TEM RETORNO
//assim como as variáveis, as funções devem ter um nome que corresponda à sua função e é importante que cada função tenha uma responsabilidade específica.
function verificarChute() {
    //FUNÇÃO BOOLEAN (verdadeiro ou falso)
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela ('p',`${mensagemTentativas}`);
        //forma de habilitar um botão no HTML (depois do ponto . inserimos o código e o atributo que vamos utilizar para manipular o elemento do HTML)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p','O número secreto é menor');
        } else {
            exibirTextoNaTela ('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

//FUNÇÃO SEM PARÂMENTRO, MAS COM RETORNO
//função para gerar um número aleatório para o jogo do número secreto
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    //length serve para contar quantos elementos estão dentro de uma lista
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
//includes serve para verificar se um elemento já está na lista
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }   else {
        //push serve para adicionar algo à lista
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados); 
        return numeroEscolhido;
    }

}

//função criada com o objetivo de limpar um campo no HTML
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';    
}

//função com o objetivo de reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);    
}   
