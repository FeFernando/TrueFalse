let pontos = 0;
let perguntaDiv = document.getElementById('perguntaDiv')
let respVer = document.getElementById('verdadeiro')
let respFals = document.getElementById('falso')
let res = document.getElementById('pontos')
let perguntas = [
    {
        pergunta: 'A Terra é o maior planeta do sistema solar?',
        resposta: 'Falso'
    },
    {
        pergunta: 'O Sol é uma estrela.',
        resposta: 'Verdadeiro'
    },
    {
        pergunta: 'A água ferve a 100 graus Celsius ao nível do mar.',
        resposta: 'Verdadeiro'
    }
];


function exibirPergunta() {
    perguntaDiv.innerHTML = perguntas[i].pergunta
}
let i = 0;
/*O parametro buttonPressed é criado pois nao podemos passar o valor falso ou verdadeiro direto
, uma vez que adicionamos um evento aos botoes para adicionar os parametro verdadeiro ou falso
ou seja se o parametro que for passado no botao for diferente da resposta do objeto respostas 
alertará que o usuario errou*/
function verificarResposta(buttonPressed) {

    if (buttonPressed === perguntas[i].resposta) {

        pontos++
        res.innerHTML = `Seus pontos: ${pontos}`
    } else {
        alert('VocÊ errou')
    }

    i++

    if (i < perguntas.length) {
        exibirPergunta()
    } else {
    }

}





// adiciona um evento de click ao button, Chama a função verificarResposta, e para mudar o parametro da função verificar resposta para 'Verdadeiro'
respVer.addEventListener('click', function () {
    verificarResposta('Verdadeiro')
})

respFals.addEventListener('click', function () {
    verificarResposta('Falso')
})

exibirPergunta()