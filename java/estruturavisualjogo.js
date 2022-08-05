
var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

var erros = 8;
var acertos = 0;
var palavraincorreta = "";

var palavracorreta = "";

var palavrasecreta = " ";
var letras = [];

const ContenhePalavrasSorteada = ["feijao", "html", "sorte", "one", "oracle", "software" , "feliz", "relogio"];

function SorteiaPalavras() {
    var palavra = ContenhePalavrasSorteada[Math.floor(Math.random()*ContenhePalavrasSorteada.length)];
    palavrasecreta = palavra;
    return palavra;
}

//desenha os tracos onde as palavras serão posicionadas em cima dos traçõs criados
function DesenhaTracos() {
  
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.beginPath();

  var eixo = 450/palavrasecreta.length;
  for( let i = 0; i < palavrasecreta.length; i++){
    pincel.strokeStyle = "#000000";
    pincel.moveTo(134 +(eixo*i), 120);
    pincel.lineTo(145 + (eixo*i), 120);
    
  } 
  pincel.stroke();
  pincel.closePath();  
  
}DesenhaTracos(SorteiaPalavras());

//ou seja quando for pressionada uma tecla ela será escrita ou desenhada 
function PreencherLetrasPressionadas(index) {
  
  pincel.font = "bold 30px Oswald, sans-serif";
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.strokeStyle = "#000000";
    
  var eixo = 450/palavrasecreta.length;
  pincel.fillText(palavrasecreta[index], 135 + (eixo*index), 120);
  pincel.stroke();
}

function DesenhaAbdomen(cor) {
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");

  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.moveTo(276, 239);
  pincel.lineTo(251, 274);
  pincel.lineTo(302, 274);
  pincel.fill();    
}

function DesenhaCabecaDoBoneco(cor) {
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");

  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(278, 235, 16, 0, 2*3.14);
  pincel.fill();
} 

function DesenhaBraco() {
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");
  
  pincel.beginPath();
  pincel.fillStyle = "#000000";
  pincel.lineWidth = 2;
  pincel.moveTo(262, 256);
  pincel.lineTo(241, 240);
  pincel.stroke();
}

function DesenhaSegundoBraco() {
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");

  pincel.beginPath();
  pincel.fillStyle = "#000000";
  pincel.lineWidth = 2;
  pincel.moveTo(290, 256);
  pincel.lineTo(312, 239);
  pincel.stroke();
}

function DesenhaPerna() {
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");

  pincel.beginPath();
  pincel.fillStyle = "#000000";
  pincel.lineWidth = 2;
  pincel.moveTo(266, 273);
  pincel.lineTo(266, 291);
  pincel.stroke();
}

function DesenhaSegundaPerna() {
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");

  pincel.beginPath();
  pincel.fillStyle = "#000000";
  pincel.lineWidth = 2;
  pincel.moveTo(285, 272);
  pincel.lineTo(285, 289);
  pincel.stroke();
}

function DesenhaSapatos() {
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");

  pincel.fillStyle = "black";
  pincel.fillRect(255, 290, 13, 5);

  pincel.fillStyle = "black";
  pincel.fillRect(283, 290, 13, 5);
}

