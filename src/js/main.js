var players = {
	jogador1: "x",
	jogador2: "o",
	nada: "branco"
}
var alternator = 'x';
var counter = 0;
var checkGame = function(id){
	var src = checkImage(id);
	if(src == "branco.png"){
		document.getElementById(id).src = "img/"+ alternator +".png";
		counter++;
		if(verifyVictory()){
			if(checkWinner(alternator)){
				alert('O Jogador 1 venceu!');
			}else{
				alert('O Jogador 2 venceu!');
			}
		}
		if(verifyVictory() == false && counter >= 9){
			alert('Temos aqui um empate!');
		}
		if(alternator == 'x'){
			alternator = players.jogador2;
		}else{
			alternator = players.jogador1;
		}
	}
};
var checkImage = function(id){
	var src = document.getElementById(id).src;
	return src.substring(src.length - 10, src.length);
};
var checkWinner = function(player){
	if(player == 'x'){
		return 1;
	}else{
		return 0;
	}
};
var verifyVictory = function(){
	//checando linhas
	if(checkImage('celula1') == checkImage('celula2') && checkImage('celula1') == checkImage('celula3') && checkImage('celula1') != 'branco.png'){
		return true;
	}
	if(checkImage('celula4') == checkImage('celula5') && checkImage('celula4') == checkImage('celula6') && checkImage('celula4') != 'branco.png'){
		return true;
	}
	if(checkImage('celula7') == checkImage('celula8') && checkImage('celula7') == checkImage('celula9') && checkImage('celula7') != 'branco.png'){
		return true;
	}
	//checando colunas
	if(checkImage('celula1') == checkImage('celula4') && checkImage('celula1') == checkImage('celula7') && checkImage('celula1') != 'branco.png'){
		return true;
	}
	if(checkImage('celula2') == checkImage('celula5') && checkImage('celula2') == checkImage('celula8') && checkImage('celula2') != 'branco.png'){
		return true;
	}
	if(checkImage('celula3') == checkImage('celula6') && checkImage('celula3') == checkImage('celula9') && checkImage('celula3') != 'branco.png'){
		return true;
	}
	//checando diagonal principal
	if(checkImage('celula1') == checkImage('celula5') && checkImage('celula1') == checkImage('celula9') && checkImage('celula1') != 'branco.png'){
		return true;
	}
	//checando diagonal secundaria
	if(checkImage('celula3') == checkImage('celula5') && checkImage('celula3') == checkImage('celula7') && checkImage('celula3') != 'branco.png'){
		return true;
	}
	return false;
}
var reloadGame = function(){
	location.reload();
};


