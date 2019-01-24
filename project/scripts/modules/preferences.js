// Night Mode - Change la couleur de fond et du texte si "Ctrl"
export function changeFrontColor() {
	var state = 0;
	var player = document.getElementById('player');
    document.addEventListener('keydown', (event) => {
  	const nomTouche = event.key;

	if (nomTouche === 'Control') {
		if (state == 0) {
			state = 1;
			document.body.style.backgroundColor =  "rgb(0,0,0)";
			document.body.style.color =  "rgb(255,255,255)";
		}else {
			if (state == 1) {
			state = 0;
			document.body.style.backgroundColor =  "rgb(255,255,255)";
			document.body.style.color =  "rgb(0,0,0)";
		}
	}


	}else if(event.keyCode == 37){
		let temp = parseInt(player.style.left)/20;
		temp = (temp-1)*20;
		CheckHorizontality(temp);
		player.style.left = temp +"px";
	}else if(event.keyCode == 38){
		let temp = parseInt(player.style.top)/20;
		temp = (temp-1)*20;
		CheckVerticality(temp);
		player.style.top = temp +"px";
	}else if(event.keyCode == 39){
		let temp = parseInt(player.style.left)/20;
		temp = (temp+1)*20;
		CheckHorizontality(temp);
		player.style.left = temp +"px";
	}else if(event.keyCode == 40){
		let temp = parseInt(player.style.top)/20;
		temp = (temp+1)*20;
		CheckVerticality(temp);
		player.style.top = temp +"px";
	}
	return;
	}, false);
}

function CheckVerticality(ele){
	if(ele < 0){
		ele = 0
	}else if(ele > 600){
		ele = 600
	}
}

function CheckHorizontality(ele){
	if(ele < 0){
		ele = 0
	}else if(ele > 800){
		ele = 800
	}
}