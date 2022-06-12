var erros = 6;

function sorteiapalavras(){
   
    const armazenapalavras = ["css", "html", "javascript", "one", "oracle", "software" , "feliz"];

    var palavraselecionada = armazenapalavras[Math.floor(Math.random()*armazenapalavras.length)];
    console.log(palavraselecionada);

    palavragerada = palavraselecionada 
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

    var eixo = 100/palavragerada.length

      for( let i = 0; i < palavragerada.length; i++){
        console.log(i);
        
        pincel.strokeStyle = "#ffffff";
        pincel.moveTo(70 +(eixo*i), 86);
         pincel.lineTo(80 + (eixo*i), 86);
        }
    pincel.stroke();
   pincel.closePath();
   
   
}

function escreverpalavracorreta(index){
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");
    
    var eixo = 100/palavragerada.length
    
      pincel.fillText(palavragerada[index], 70 + (eixo*index), 80); 
    pincel.stroke()
}
 
function validandopalvradigitada(){
   addEventListener("onkeypress", function(){
    alert("deu certo");
   });
}
validandopalvradigitada();