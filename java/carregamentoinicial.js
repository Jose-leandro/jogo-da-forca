var botaoini = document.querySelector(".botaoini");
botaoini.addEventListener("click", function(event){
    event.preventDefault();
});

  var criarbotaonovojogo = document.querySelector(".botaonovojogo");
    criarbotaonovojogo.style.visibility = "hidden";
    var criarbotaodesistir = document.querySelector(".botaodesitir");
    criarbotaodesistir.style.visibility = "hidden";

function iniciarosrecusosdojogo() {
 	      
        var titulodojogo = document.querySelector("#titulo");
        titulodojogo.classList.add("titulo");
        var nomedotitulo = "jogando um joginho";
        titulodojogo.textContent = nomedotitulo;

        var imagem = document.querySelector(".imagem-forca");
        imagem.style.visibility = "visible";

        var botaoini = document.querySelector(".botaoini");
        botaoini.style.display = "none";
        var botaoadi = document.querySelector(".botaoadi");
        botaoadi.style.display = "none";

        var criarbotaonovojogo = document.querySelector(".botaonovojogo");
        criarbotaonovojogo.style.visibility = "visible";
        var criarbotaodesistir = document.querySelector(".botaodesitir");
        criarbotaodesistir.style.visibility = "visible";
            
        var tela = document.querySelector("canvas");
        tela.classList.add("tamanho");           
       
         
         var iniciarosrecusosdojogo = colocarbotoesrestantes();
         var iniciarosrecusosdojogo = sorteiapalavras();
        var iniciarosrecusosdojogo = tela.onclick = dispara;
         var iniciarosrecusosdojogo = desenhalinhas();
         
 }

 function colocarbotoesrestantes() {
    

    criarbotaonovojogo.classList.add("botaonovojogo");
    var criarp = document.querySelector(".novojogo");
    criarp.textContent = "novo jogo";

    var criarbotaodesistir = document.querySelector(".botaodesitir");
    criarbotaodesistir.classList.add("botaodesistir");
    var criarpdesistir = document.querySelector(".desistir");
    criarpdesistir.textContent = "desistir";
    
 }
            
 









