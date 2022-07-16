var canvas = document.getElementById('meuCanvas');
var contexto = canvas.getContext('2d');



function baseForca(){
        
    // desenha base forca
        contexto.beginPath();
        contexto.moveTo(600,400);
        contexto.lineTo(750,400);

      // espessura da linha
      contexto.lineWidth = 3;
      contexto.lineCap = 'round';
      contexto.strokeStyle = '#0A3871'; 
      contexto.stroke();
  }


  function desenhaLinhaVertical(){
// desenha linha vertical da forca
    contexto.moveTo(620,70);
    contexto.lineTo(620,400);
    contexto.stroke();  
  }

  function desenhaParteDeCima(){
    //  desenha parte de cima da forca
          contexto.moveTo(620,70);
          contexto.lineTo(730,70);
          contexto.stroke(); 
  }

  function desenhaCorda(){
    // desenha corda 
          contexto.moveTo(730,70);
          contexto.lineTo(730,120);
          contexto.stroke(); 
  }

  function desenhaCabeca(){
   // desenha cabeça
    contexto.arc(730, 150, 27, 30, Math.PI ,true);
    contexto.moveTo(730,180);
    contexto.stroke(); 
 }    
 
  function desenhaCorpo(){
    // desenha corpo
        contexto.lineTo(730,280);
        contexto.stroke(); 
  }

  function desenhaBracoEsquerdo(){
  //desenha braço esquerdo
        contexto.moveTo(730,180);
        contexto.lineTo(760,220);
        contexto.stroke(); 
  }

  function desenhaBracoDireito(){
    //desenha braço direito
        contexto.moveTo(730,180);
        contexto.lineTo(700,220);
        contexto.stroke(); 
        
  }

  function desenhaPernaEsquerda(){
        //desenha perna esquerda
        contexto.moveTo(730,280);
        contexto.lineTo(760,310);
        contexto.stroke(); 
  } 


  function desenhaPernaDireita(){
    
    //desenha perna direita
    contexto.moveTo(730,280);
    contexto.lineTo(700,310);
    contexto.stroke(); 
  }