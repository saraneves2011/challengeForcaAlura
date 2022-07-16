

        document.onkeypress =  ehLetra;

        function ehLetra(event){

          key = event.keyCode;
          var str = String.fromCharCode(key);
          var up = str.toUpperCase();
          
          if (key >= 97 && key <= 122){
            verifica(up);
          }
            else
              alert("digite apenas letras sem caracteres especiais"); 

        }
