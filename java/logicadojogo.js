
function ValidacaoDeLetrasCorretas(key){
  if(letras.length < 1 || letras.indexOf(key) < 0){
    letras.push(key);
    return false
  }
}

function AdicionaraLetraCorreta(i){
  if(palavrasecreta.indexOf(i) <= 0){
    acertos+=1
    for(let i = 0; i < palavrasecreta.length; i++){
      if(palavrasecreta.length == acertos){
        voceGanhouOjogo();
      }else{
      }
    }
  } 
}

//praticamente  ela mostrá um popup que o jogador ganhou
function voceGanhouOjogo(){
 
  var segpopup = document.querySelector(".segpopup-wrapper");

  segpopup.style.display = "block";
      
  segpopup.addEventListener("click", (event) =>{
  var className2 = ["segpopup-close", "segpopup-wrapper"];
  var classNameOfClickedElement = event.target.classList[0];
            
  var deixaroifmaiscurto2 = className2.some(className2 => className2 === classNameOfClickedElement)
  if(deixaroifmaiscurto2){
      segpopup.style.display = "none";
    }
  });    
}

//ela vai pegar a letra errada , e pra cada erro vai subritair por erros e despois a medida que os erros vai sendo subritaídos na variavel erros, vai sendo esscuntado funções 
function SubritaiLetraincorretasPorErros(letter) {
  if(palavrasecreta.indexOf(letter) <= 0){
    erros-=1
    if(erros === 7){
      DesenhaCabecaDoBoneco("#3d587a")
    }
    if(erros === 6){
      DesenhaAbdomen("#3d587a")
    }
    if(erros === 5){
      DesenhaBraco();
    }
    if(erros === 4){
      DesenhaSegundoBraco();
    }
    if(erros === 3){
      DesenhaPerna();
    }
    if(erros === 2){
      DesenhaSegundaPerna();
    }
    if(erros === 1){
      DesenhaSapatos();
      VocePerdeu();
    }
  }    
}

//praticamente vai mostar um popup que o jogador perdeu
function VocePerdeu(){
  var Popup = document.querySelector(".popup-wrapper");
  Popup.style.display = "block";
 
  Popup.addEventListener("click", (event) =>{
  var className = ["popup-close", "popup-wrapper"];
  var classNameOfClickedElement = event.target.classList[0];
       
  var DiminuirOIfUmpouco = className.some(className => className === classNameOfClickedElement)
  if(DiminuirOIfUmpouco){
    Popup.style.display = "none";
  }   
  });  
 }

 
 //tem como função deterctar tecla, transformar para string, ser conter na palavra selecionada vai ser preenchida , ser não conter vai ser adiconar como letras erradas
 function DetectarLetrasQuandoPressionada() {
  document.addEventListener("keypress", function(event){

    var keyCodeEnter = 13;
        
    const arryStringComAcentuacao = ["á", "â" , "à", "ã", "ç", "é", "è", "ê", "í", "î", "ì",
     "ô", "õ", "ó", "ò", "ú", "ù", "û", "'", "!", ";", ":","¨", "#", "@","%", "$","&", "*",
      "[", "{", "(", ")", " ", "-", "_", ",", ".", "~", "^", "<", ">", "`", "=", "+", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var NumeroDaTecla = event.keyCode;
    var NumeroDaTeclaTransformada = String.fromCharCode(NumeroDaTecla);
    NumeroDaTeclaTransformada.toUpperCase();
    if(!ValidacaoDeLetrasCorretas(NumeroDaTeclaTransformada)){
      if(palavrasecreta.includes(NumeroDaTeclaTransformada)){
        AdicionaraLetraCorreta(palavracorreta.indexOf(NumeroDaTeclaTransformada))
        for(let i = 0; i < palavrasecreta.length; i++){
              
          if(palavrasecreta[i] == NumeroDaTeclaTransformada){
            PreencherLetrasPressionadas(i)                     
          }  
        }
      }else{
        if(keyCodeEnter == NumeroDaTecla) {
          return;
        }else {
          if(!arryStringComAcentuacao.includes(NumeroDaTeclaTransformada)) {
            SubritaiLetraincorretasPorErros(palavraincorreta.indexOf(NumeroDaTeclaTransformada));
    
            var OndevaiSerAdicionadaoAsLetrasErradas = document.querySelector(".adicionar-letras-incorretas");
            var TagParagrafor =  document.createElement("p");
            TagParagrafor.classList.add("adicionar-letras-incorreta");
                    
            OndevaiSerAdicionadaoAsLetrasErradas.appendChild(TagParagrafor);
                                        
            TagParagrafor.textContent = NumeroDaTeclaTransformada; 
          }else {
            return;
          }
        }
      }    
    }       
  });
}

// agora a lógica para dispositivos com tela sensiveis ao toque para poder jogar
function comoJogarNoMoblie() {
        
  var inputParaMoblie = document.querySelector(".campo-adicionar-letras");
  inputParaMoblie = inputParaMoblie.value;
  inputParaMoblie = inputParaMoblie.toUpperCase();
        
  verificarLetraParaMoblie(inputParaMoblie);
 }

 
 //tem como função deterctar tecla, transformar para string, ser conter na palavra selecionada vai ser preenchida , ser não conter vai ser adiconar como letras erradas
 function verificarLetraParaMoblie(letraParaVerificar) {

  const arryStringComAcentuacao = ["á", "â" , "à", "ã", "ç", "é", "è", "ê", "í", "î", "ì",
     "ô", "õ", "ó", "ò", "ú", "ù", "û", "'", "!", ";", ":","¨", "#", "@","%", "$","&", "*",
      "[", "{", "(", ")", "-", "_", ",", ".", "~", "^", "<", ">", "`", "=", "+", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
    if(!ValidacaoDeLetrasCorretas(letraParaVerificar)){
      if(palavrasecreta.includes(letraParaVerificar)){
        AdicionaraLetraCorreta(palavracorreta.indexOf(letraParaVerificar))
        for(let i = 0; i < palavrasecreta.length; i++){
              
          if(palavrasecreta[i] == letraParaVerificar){
            PreencherLetrasPressionadas(i)                     
          }  
        }
      }else{
        if(!arryStringComAcentuacao.includes(letraParaVerificar)) {
          SubritaiLetraincorretasPorErros(palavraincorreta.indexOf(letraParaVerificar));
  
          var OndevaiSerAdicionadaoAsLetrasErradas = document.querySelector(".adicionar-letras-incorretas");
          var TagParagrafor =  document.createElement("p");
          TagParagrafor.classList.add("adicionar-letras-incorreta");
                  
          OndevaiSerAdicionadaoAsLetrasErradas.appendChild(TagParagrafor);
                                      
          TagParagrafor.textContent = letraParaVerificar; 
        }else {
          return;
        }
      } 
    }
}



function PopupNumeros() {
  var QuintoPopup = document.querySelector(".quinpopup-wrapper");
  QuintoPopup.style.display = "block";
 
  QuintoPopup.addEventListener("click", (event) =>{
  var QuintaClassName = ["quinpopup-close", "quinpopup-wrapper"];
  var classNameOfClickedElement = event.target.classList[0];
       
  var DiminuirOIfUmpouco =  QuintaClassName.some(QuintaClassName => QuintaClassName === classNameOfClickedElement)
  if(DiminuirOIfUmpouco) {
    QuintoPopup.style.display = "none";
  }    
});  
}

//detectar tecla pressionada, transformar, mostrar popup para cada tecla de números pressionadas
function VerificarSerLetrasOuNumero(){
  addEventListener("keypress", function(event){
    
    var NumeroDaTecla = event.keyCode;
    var NumeroDaTeclaTransformada =  String.fromCharCode(NumeroDaTecla);
    NumeroDaTeclaTransformada.toUpperCase();
  
    var zero = 0;
    var um = 1;
    var dois = 2;
    var tres = 3;
    var quarto = 4;
    var cinco = 5;
    var seis = 6;
    var seti = 7;
    var oito = 8;
    var none = 9;
    var entrekeyCode = 13;

    if(entrekeyCode  == NumeroDaTecla) {
      return;
    }else {
        
      if(NumeroDaTeclaTransformada == zero){
        PopupNumeros();
      }
      if(NumeroDaTeclaTransformada == um){
        PopupNumeros();
      }
      if(NumeroDaTeclaTransformada == dois){
        PopupNumeros();
      }
      if(NumeroDaTeclaTransformada == tres){
        PopupNumeros();
      }
      if(NumeroDaTeclaTransformada == quarto){
        PopupNumeros();
      }
      if(NumeroDaTeclaTransformada == cinco){
        PopupNumeros();
      }
      if(NumeroDaTeclaTransformada == seis){
        PopupNumeros();
      }
      if(NumeroDaTeclaTransformada == seti){
        PopupNumeros();
      }
      if(NumeroDaTeclaTransformada == oito){
        PopupNumeros();
      }
      if(NumeroDaTeclaTransformada == none){
        PopupNumeros();
      }  
    }
    return false; 
   });   
  }
  VerificarSerLetrasOuNumero();

  //a lógica de quando o usúario perder , popup, limpar , traços, sortear nova palavra , e limpar onde é adicionado letras erradas, é redefinir erros
  function BtnDesistir() {
    var TerceiroPopup = document.querySelector(".terpopup-wrapper");
    TerceiroPopup.style.display = "block";
  
    TerceiroPopup.addEventListener("click", (event) =>{
    var TerclassName = ["terpopup-close", "terpopup-wrapper"];
    var classNameOfClickedElement = event.target.classList[0];
        
    var DiminuirOIfUmpouco = TerclassName.some(TerclassName => TerclassName === classNameOfClickedElement)
    if(DiminuirOIfUmpouco){
      TerceiroPopup.style.display = "none";
      }
    });  
  
    pincel.clearRect(0, 0, 600, 400);
    DesenhaTracos(SorteiaPalavras());

    var OndevaiSerAdicionadaoAsLetrasErradas = document.querySelector(".adicionar-letras-incorretas");
    OndevaiSerAdicionadaoAsLetrasErradas.textContent = "";
    erros = 8;
  }
  
  //lógica de qunado o jogador ganhar, limpar onde é adicionado, limpar traços, sortear nova palavra, é redefinir erros
  function BtnNovoJogo() {
    var OndevaiSerAdicionadaoAsLetrasErradas = document.querySelector(".adicionar-letras-incorretas");
    OndevaiSerAdicionadaoAsLetrasErradas.textContent = "";
    pincel.fillStyle = "black";
    pincel.clearRect(0, 0, 600, 400);
    DesenhaTracos(SorteiaPalavras());
    erros = 8;
  }
  
  //esconder algumas coisas e tornar visivel outras , para adicionar novas plavras ao jogo
  function TornarVisivelParaAdicionar() {
    var InputAdicionar = document.querySelector(".input-adicionar");
    InputAdicionar.style.visibility = "visible";
    
    var Btndicionarpalavrasnovas = document.querySelector(".btn-adicionarpalavra-ao-jogo");
    Btndicionarpalavrasnovas.style.visibility = "visible";
    
    var BtnVoltar = document.querySelector(".btn-voltar");
    BtnVoltar.style.visibility = "visible";
  
    var BtnIniciarOJogo = document.querySelector(".btn-iniciar");
    BtnIniciarOJogo.style.visibility = "hidden";
  
    var BtnAdicionarPalavrasNovasNoJogo = document.querySelector(".btn-adicionar");
    BtnAdicionarPalavrasNovasNoJogo.style.visibility = "hidden";
  
    var Pincel = document.querySelector("canvas");
    Pincel.style.visibility = "hidden";
  }

  //a lógica para adiconar a nova palavra ao arry de palavras para ser selecionadas
  function AdicionarNovaspalavras() {
    var InputAdicionar = document.querySelector(".input-adicionar");
    InputAdicionar = InputAdicionar.value;
    ContenhePalavrasSorteada.push(InputAdicionar);
  }
  
  //popup de adicionado com sucesso, a palavra nova
  function PopupPalvraAdicionada() {
    var QuartoPopup = document.querySelector(".quapopup-wrapper");
    QuartoPopup.style.display = "block";
  
    QuartoPopup.addEventListener("click", (event) =>{
    var QuaclassName = ["quapopup-close", "quapopup-wrapper"];
    var classNameOfClickedElement = event.target.classList[0];
        
    var DiminuirOIfUmpouco = QuaclassName.some(QuaclassName => QuaclassName === classNameOfClickedElement)
    if(DiminuirOIfUmpouco){
        QuartoPopup.style.display = "none";
      }
    });  
  }
  
  //limpa o input quando for adcionado a palvra ,limpar os traços é sortear nova palavra
  function LimparInputEPincel() {
  var InputAdicionar = document.querySelector(".input-adicionar");
    InputAdicionar.value =" ";
  
    pincel.clearRect(0, 0, 600, 400);
    DesenhaTracos(SorteiaPalavras());
  }
  
  //a logica do btn voltar escondendo alguns é mostrando outros para que possar voltar para o início para que possar iniciar o jogo
  function btnVoltar() {
    var InputAdicionar = document.querySelector(".input-adicionar");
    InputAdicionar.style.visibility = "hidden";
  
    var BtnAdicionarPalavrasNovasNoJogo = document.querySelector(".btn-adicionarpalavra-ao-jogo");
    BtnAdicionarPalavrasNovasNoJogo.style.visibility = "hidden";
    
    var BtnVoltar = document.querySelector(".btn-voltar");
    BtnVoltar.style.visibility = "hidden";
  
    var BtnIniciarOJogo = document.querySelector(".btn-iniciar");
    BtnIniciarOJogo.style.visibility = "visible";
  
    var BtnAdicionarPalavrasNovasNoJogo = document.querySelector(".btn-adicionar");
    BtnAdicionarPalavrasNovasNoJogo.style.visibility = "visible";
  
  }
  
  
  
