import { Personnage } from '../classes/personnage.js'
class Joueur extends Personnage{

	constructor(nom, vie, speed) {
		super(nom, vie);
		this.speed = speed;
	}

	get speed() {
    	return this.vie();
  	}
  	set speed(nSpeed){
		if(nSpeed){ 
	    	this._speed = nSpeed;
		}
	}

}

export { Joueur };
