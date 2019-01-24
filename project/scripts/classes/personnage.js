class Personnage {

	constructor(nom, vie, speed) {
    	this.nom = nom;
    	this.vie = vie;
  	}

  	get nom() {
    	return this.nom();
  	}

  	get vie() {
    	return this.vie();
  	}
  	set nom(nNom){
		if(nNom){ 
	    	this._name = nNom;
		}
	}

  	set vie(nVie) {
    	if(nVie){ 
        	this._vie = nVie;
        }
  	}
}

export { Personnage };