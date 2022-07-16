

 function palavraNova(){       
  
  var input = document.querySelector('#palavraNova');
  var adicionar = input.value;

  var novaPalavra = ale.includes(adicionar);

  if(adicionar <= 0){
      alert("digite uma nova palavra");
  }
  if(novaPalavra) {

    alert("ja existe, adicione outra palavra")
  } else if(adicionar.length > 1){
    
    ale.push(adicionar);

    
    var content = document.getElementById('palavraNova');
    
    content.select();
    document.execCommand("cut");
    
    desenha();
    escutaClick();
    baseForca();
  } 

  
}