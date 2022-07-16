
var ale = ["po","banana","sol","sara","macaco","sorvete","flor","chato","bala"];

function palavraSecreta(){
        
    var aleran = ale[Math.floor(Math.random() * ale.length)];

    var lM = aleran.toUpperCase();

    var x = 600;
    var y = 620;

    for (var i = 1; i <= lM.length;i++){
        linhas(x,y);
        x = x + 30;
        y = y + 30;
    }

  return lM;
}
