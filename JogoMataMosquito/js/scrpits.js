// @ts-nocheck
//|Ajuste de tamanho de tela
var altura=0;
var largura=0;
var vida=1;
var tempo=15;
var CriaMosquitoTempo=2000;

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'normal') {
	//1500
	CriaMosquitoTempo = 1500;
} else if(nivel === 'dificil') {
	//1000
	CriaMosquitoTempo = 1000;
} else if(nivel === 'zika') {
	//750
	CriaMosquitoTempo = 750;
}


function AjustaPalco()
{
     altura= window.innerHeight;
     largura= window.innerWidth;
}
AjustaPalco();





var cronometro = setInterval(function(){
   
    tempo-=1;
    if(tempo<0)
    {
        clearInterval(cronometro);
        clearInterval(CriaMosquito);
        window.location.href='vitoria.html';
    }
    else
    {
        document.getElementById('cronometro').innerHTML= tempo;
    }
    
},CriaMosquitoTempo);

 

//tamanho do mosquito
function TamanhoRandom()
{
    var classe = Math.floor(Math.random() * 3);
    

    switch(classe)
    {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }


}

//lado aleatorio
function LadoRandom()
{   
    var classe = Math.floor(Math.random() * 2);
    

    switch(classe)
    {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }


}

//Posições aleatorias
function PosicaoRandom()
{
    // Remover mosquito caso exista
    if( document.getElementById('mosquito'))
    {
        document.getElementById('mosquito').remove();
        if(vida>3)
        {
            window.location.href ='fim_de_jogo.html';
        }
        else
        {
            document.getElementById('v'+vida).src='imagens/coracao_vazio.png';
            vida++;
        }
        
        
    }
    
    

    var posicaoX = Math.floor(Math.random()*largura)-90;
    var posicaoY = Math.floor(Math.random()*altura)-90;
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    //criando elemento html
    var mosquito = document.createElement('img');
    mosquito.src= 'imagens/mosca.png';
    mosquito.className=TamanhoRandom() + ' ' + LadoRandom();
    mosquito.style.left = posicaoX+'px';
    mosquito.style.top = posicaoY+'px';
    mosquito.style.position = 'absolute';
    mosquito.id ='mosquito'
    mosquito.onclick = function(){
        this.remove(mosquito);
    }

    document.body.appendChild(mosquito);
    
}



