var erros = 6;
var letra = [];
var palavra = [];
var teclaPressionada = [];
console.log(teclaPressionada);
console.log(palavra);
function sorteiapalavras(){
   
    const armazenapalavras = ["css", "html", "javascript", "one", "oracle", "software" , "feliz"];

    var palavraselecionada = armazenapalavras[Math.floor(Math.random()*armazenapalavras.length)];
    console.log(palavraselecionada);

  palavragerada = palavraselecionada

    palavra.push(palavraselecionada);
    console.log(palavraselecionada);

    return palavraselecionada;
}



//desenha os tracos onde as palavras serao colocadas
function desenhalinhas(){
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");
  

   pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.beginPath();

    var eixo = 450/palavragerada.length;

      for( let i = 0; i < palavragerada.length; i++){
        console.log(i);
        
        pincel.strokeStyle = "#1b4657";
        pincel.moveTo(134 +(eixo*i), 120);
        pincel.lineTo(145 + (eixo*i), 120);
        }
    pincel.stroke();
   pincel.closePath();   
}
function desenhaletraspressionadas(){
  addEventListener("keypress", function(event){
   
    var x = event.keyCode;
    var saber =  String.fromCharCode(x);
    saber.toUpperCase();
     return saber.value;
  }); 
 
}


function escreverpalavracorreta(index){
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");
    pincel.font = "bold 30px Oswald, sans-serif";
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle = "#ffffff";
    pincel.beginPath();
    var eixo = 100/palavra.length;
    
      pincel.fillText(index ,50, 85); 
    pincel.stroke();
}escreverpalavracorreta(desenhaletraspressionadas());

function escreverpalavraincorreta(letra){
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");
  pincel.font = "bold 15px Oswald, sans-serif";
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.strokeStyle = "#ffffff";
  
  
  
    pincel.fillText(letra, 250, 90 ); 
  pincel.stroke();
}



 function verificarletrasounum(){
    addEventListener("keypress", function(event){
   
    var x = event.keyCode;
    var saber =  String.fromCharCode(x);
    saber.toUpperCase();

    var zer = 0;
    var pri = 1;
    var seg = 2;
    var ter = 3;
    var quar = 4;
    var quin = 5;
    var sex = 6;
    var set = 7;
    var oit = 8;
    var non = 9;

    if(saber == zer){
      alert("num");
    }
    if(saber == pri){
      alert("num");
    }
    if(saber == seg){
      alert("num");
    }
    if(saber == ter){
      alert("num");
    }
    if(saber == quar){
      alert("num");
    }
    if(saber == quin){
      alert("num");
    }
    if(saber == sex){
      alert("num");
    }
    if(saber == set){
      alert("num");
    }
    if(saber == oit){
      alert("num");
    }
    if(saber == non){
      alert("num");
    }  
    return false; 
    //fazer um pop up
  });   
   
 }
 verificarletrasounum();

  
function desenhaabdomen(cor1, cor2){
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");
  
  pincel.fillStyle = cor1;
  pincel.beginPath();
  pincel.moveTo(162, 236);
  pincel.lineTo(135, 275);
  pincel.lineTo(184, 275);
  pincel.fill();

  pincel.fillStyle = cor2;
  pincel.beginPath();
  pincel.moveTo(161, 241);
  pincel.lineTo(140, 272);
  pincel.lineTo(180, 272);
  pincel.fill();

    
}
desenhaabdomen("black", "#55ceff");

  
function desenhaCabecaDoBoneco(cor1, cor2){
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");

  pincel.fillStyle = cor1;
  pincel.beginPath();
  pincel.arc(160, 233, 16, 0, 2*3.14);
  pincel.fill();

  pincel.fillStyle = cor2;
   pincel.beginPath();
   pincel.arc(160, 233, 14, 0, 2*3.14);
  pincel.fill();
  
}   
desenhaCabecaDoBoneco("black", "#55ceff"); 

var tela = document.querySelector("canvas");

function dispara(evento) {
  var x = evento.pageX  -  tela.offsetLeft;
  console.log(x);
   var y = evento.pageY - tela.offsetTop;
   console.log(y);
     
}
function desenhabracos(){
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");
  
  pincel.beginPath();
  pincel.lineWidth = 2;
  pincel.moveTo(148, 255);
  pincel.lineTo(124, 244);
  pincel.stroke();
}
desenhabracos();

function desenhasegbraco(){
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");

  pincel.beginPath();
  pincel.lineWidth = 2;
  pincel.moveTo(171, 253);
  pincel.lineTo(192, 236);
  pincel.stroke();

}
desenhasegbraco();

function desenhaperna(){
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");

  pincel.beginPath();
  pincel.lineWidth = 2;
  pincel.moveTo(149, 273);
  pincel.lineTo(149, 289);
  pincel.stroke();
  
}
desenhaperna();

function desenhasegperna(){
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");

  pincel.beginPath();
  pincel.lineWidth = 2;
  pincel.moveTo(168, 272);
  pincel.lineTo(168, 289);
  pincel.stroke();
}
desenhasegperna();

function desenhasapatos(){
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");

  pincel.fillStyle = "black";
  pincel.fillRect(141, 286, 13, 5);

  pincel.fillStyle = "black";
  pincel.fillRect(163, 286, 13, 5);
}
desenhasapatos();

