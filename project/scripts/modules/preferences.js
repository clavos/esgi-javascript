// Night Mode - Change la couleur de fond et du texte si "Ctrl"
export function changeFrontColor() {
	var state = 0;
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
  	
    return;
  }
}, false);
}