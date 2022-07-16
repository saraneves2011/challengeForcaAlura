
    let vetor = [];

    function verifica(up) {
      let letraJaDigitada = vetor.includes(up)

      if(letraJaDigitada) {
        alert("ja existe")
      } else {
        vetor.push(up)
        desenhaLCorreta(up)
        desenhaLIncorreta(up)
      }
    }


    function desenhaLCorreta(str){
          
        var x = 600;
        var res = palavra.split("");
        var i = 0;
      
        while( i < palavra.length ){
            if(str == res[i]) {
            
            contexto.font='20px arial';
            contexto.fillStyle='#1c4c88';

            if(acerto <= palavra.length && erro < 9){
               contexto.fillText(str, x, 499);
               acerto++;
            }
            }
              x = x + 30;
            i++; 
          }

          if(acerto == palavra.length ){
            erro = 12;
            contexto.font='20px arial';
            contexto.fillStyle='green';
            contexto.fillText("Você venceu!", 800, 400);
            
          }
    }



    function desenhaLIncorreta(str){
        var i = 0;
        var uper = palavra.toUpperCase();
        var res = uper.split("");
        var veri = res.indexOf(str);

      

        if(veri < 0){
          erro++;
          contexto.font='20px arial';
          contexto.fillStyle='#1c4c88';
          if(erro < 10){
             contexto.fillText(str, x, 550); 
          }
          x = x + 30;
        }

        if(erro == 1){
          desenhaLinhaVertical();
        }

        if(erro == 2){
            desenhaParteDeCima();
        }

        if(erro == 3){
            desenhaCorda();
        }

        if(erro == 4){
            desenhaCabeca();
            
        }

        if(erro == 5){
            desenhaCorpo();
        }

        if(erro == 6){
            desenhaBracoDireito();
        }

        if(erro == 7){
            desenhaBracoEsquerdo();
        }

        if(erro == 8){
            desenhaPernaDireita();
        }

        if(erro == 9){
            desenhaPernaEsquerda();
           
        }

        if(erro >= 9 && erro < 11){
          contexto.font='20px arial';
          contexto.fillStyle='red';
          contexto.fillText("Você perdeu!", 800, 400); 
        }
    }