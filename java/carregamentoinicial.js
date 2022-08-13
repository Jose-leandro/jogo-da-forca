//previnir que a página sejá recarregada quando for clicado nos botões
  function Previnir() {
    var BtnAdicionarPalavrasNovasNoJogo = document.querySelector(".btn-adicionar");
    BtnAdicionarPalavrasNovasNoJogo.addEventListener("click", function(event){
      event.preventDefault();
    });
  
    var BtnVoltar = document.querySelector(".btn-voltar");
    BtnVoltar.addEventListener("click", function(event){
      event.preventDefault();
    });

    var Btndicionarpalavrasnovas = document.querySelector(".btn-adicionarpalavra-ao-jogo");
    Btndicionarpalavrasnovas.addEventListener("click", function(event){
      event.preventDefault();
    });

    var BtnIniciarOJogo = document.querySelector(".btn-iniciar");
    BtnIniciarOJogo.addEventListener("click", function(event){
        event.preventDefault();
    });

    var BtnNovoJogo = document.querySelector(".btn-novojogo")
    BtnNovoJogo.addEventListener("click", function(event){
      event.preventDefault();
    });

    var BtnDesistir = document.querySelector(".btn-desistir");
    BtnDesistir.addEventListener("click", function(event){
    event.preventDefault();
    });
  }Previnir();

  //o porque, pois eu precisava declarar fora da função para que funcione
  var MostarBtnNovoJogo = document.querySelector(".btn-novojogo");
  MostarBtnNovoJogo.style.visibility = "hidden";

  var MostarBtnDesistir = document.querySelector(".btn-desistir");
  MostarBtnDesistir.style.visibility = "hidden";

  //esconde e tambem oculta determinados btns , imgs e funções do jogo
function CarregarOsRecusosDoJogo() {
 	
  var TituloDoJogo = document.querySelector(".titulo");
  TituloDoJogo.style.visibility = "visible";

  var  MostarBtnIniciarOJogo = document.querySelector(".btn-iniciar");
  MostarBtnIniciarOJogo.style.visibility = "hidden";

  var BtnAdicionarPalavrasNovasNoJogo = document.querySelector(".btn-adicionar");
  BtnAdicionarPalavrasNovasNoJogo.style.visibility = "hidden";

  var MostarBtnNovoJogo = document.querySelector(".btn-novojogo");
  MostarBtnNovoJogo.style.visibility = "visible";
  
  var MostarBtnDesistir = document.querySelector(".btn-desistir");
  MostarBtnDesistir.style.visibility = "visible";          

  var Canvas = document.querySelector("#canvas");
  Canvas.style.visibility = "visible";

  var campoAdicionarLetras = document.querySelector(".campo-adicionar-letras");
  campoAdicionarLetras.style.visibility = "visible";

  var btnVerificarLetra = document.querySelector(".btn-verificar-letra");
  btnVerificarLetra.style.visibility = "visible";
     
  DesenhaTracos();
  DetectarLetrasQuandoPressionada();
 }
  
 var Tela = document.querySelector("canvas");
 Tela.classList.add("tela");

 //deixar visivel quando for clicado sobre o simbolo de direitos autorais
 function DireitosAutorais() {
    var SimboloDireitos = document.querySelector(".material-symbols-outlined");
      SimboloDireitos.addEventListener("click", function(){
        var MostarContenerDireitos = document.querySelector(".direitos");
        MostarContenerDireitos.style.visibility = " visible";

        var MostarContenerInformacaoDireitos = document.querySelector(".informacao-direitos");
        MostarContenerInformacaoDireitos.style.visibility = "visible";
        MostarContenerInformacaoDireitos.classList.add("direitos");
      });

 }DireitosAutorais();

  //esconder as informações quando for  clicado duas vezes no simbolo 
 function EsconderDireitosAutorais() {
    var SimboloDireitosAutorais = document.querySelector(".material-symbols-outlined");
    SimboloDireitosAutorais.addEventListener("dblclick", function() {
      var EsconderContenerDireitos = document.querySelector(".direitos");
      EsconderContenerDireitos.style.visibility = " hidden";
      
      var MostarContenerInformacaoDireitos = document.querySelector(".informacao-direitos");
      MostarContenerInformacaoDireitos.style.visibility = "hidden";
    });
 }EsconderDireitosAutorais();
