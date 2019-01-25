import { Personnage } from '../classes/personnage.js'
class Joueur extends Personnage{

	constructor(nom, vie, speed) {
		super(nom, vie);
    this.speed = speed;
    this._score =0;
	}

	get speed() {
    return this._speed;
  }
  set speed(nSpeed){
		if(nSpeed){ 
	    	this._speed = nSpeed;
		}
  }
  
  get score() {
    return this._score;
  }
  set score(nScore){
		if(nScore){ 
	    	this._score = nScore;
		}
	}

}

export { Joueur };
