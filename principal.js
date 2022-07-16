var canvas = document.getElementById('meuCanvas');
var contexto = canvas.getContext('2d');
    let palavra;
   
    
    var x = 500; 
    var erro = 0;
    var acerto = 0;

    function novoVetor(){
        vetor = [];
        erro = 0;
        x = 500;
        acerto = 0;
    }
      
        function desenha(){
            contexto.fillStyle = '#F3F5FC';
            contexto.fillRect(0,0,1200,600);

            

  document.getElementById("palavraNova").style.display = 'none';
  document.getElementById("salvar").style.display = 'none';
        } 

        function escutaClick() {
          document.getElementById("meuCanvas").style.display = 'block';
          document.getElementById("iniciarJogo").style.display = 'none';
          document.getElementById("adicionarPalavra").style.display = 'none';
          document.getElementById("novoJogo").style.display = 'inline';
          document.getElementById("desistir").style.display = 'inline';
          document.getElementById("cancelar").style.display = 'none';
          

          palavra = palavraSecreta();
        }


        function input(){

          document.getElementById("iniciarJogo").style.display = 'none';
          document.getElementById("adicionarPalavra").style.display = 'none';
          document.getElementById("palavraNova").style.display = 'block';
          document.getElementById("salvar").style.display = 'inline';
          document.getElementById("cancelar").style.display = 'inline';

        }

        function desaparece(){
          document.getElementById("novoJogo").style.display = 'none';
          document.getElementById("desistir").style.display = 'none';
          document.getElementById("iniciarJogo").style.display = 'block';
          document.getElementById("adicionarPalavra").style.display = 'block';
          document.getElementById("meuCanvas").style.display = 'none';
          document.getElementById("palavraNova").style.display = 'none';
          document.getElementById("salvar").style.display = 'none';
          document.getElementById("cancelar").style.display = 'none';
        }


        
        
        function linhas(x,y){
          baseForca();
          contexto.beginPath();
          contexto.moveTo(x,500);
          contexto.lineTo(y,500);
          contexto.stroke();  
        }
  
       
        
