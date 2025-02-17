
const caixa = document.getElementById('caixa'); // variável do espaço das imagens
document.getElementById('refaz').style.display = 'none' //esconde o botao refazer

//funcao do bt abrir caixa
function abrirCaixa(){
    const sorteio = Math.random(); //sorteia 1 num decimal entre 0 e 1

    if(sorteio<0.5){ //divide probabilidade das opcoes em 50% cada
        caixa.style.backgroundImage = "url('assets/imagens/gato-leite.jpeg')"; //menor que 0,5 gato estara bebendo leite
    }
    else{
        caixa.style.backgroundImage = "url('assets/imagens/gato-agua.jpeg')"; //maior que 0,5 gato estara bebendo agua
    }

    document.querySelector('button').style.display = 'none'; //esconde o botao abrir caixa
    document.getElementById('refaz').style.display = 'block'; //mostra o botao refazer
}

//funcao do bt refazer experimento
function refazExperimento(){
    caixa.style.backgroundImage = "url('assets/imagens/caixa-fechada.jpeg')"; //volta imagem da caixa fechada
    document.querySelector('button').style.display = 'block'; //mostra o botao abrir caixa
    document.getElementById('refaz').style.display = 'none'; //esconde o refazer
}
