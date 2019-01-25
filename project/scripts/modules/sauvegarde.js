//Module de sauvegarde
export function save(Joueur j) {

	var sauvegarde = {
		joueur: j.nom,
		score: j.score,
	}
	localStorage.setItem("sauvegarde", JSON.stringify(sauvegarde));


}

export function load() {

	var sauvegarde = JSON.parse(localStorage.getItem("sauvegarde"));

	if (sauvegarde != null && sauvegarde != undefined) {
		//
	}


}