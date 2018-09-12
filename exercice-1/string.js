function ucfirst(chaine) {
	if ((typeof chaine.valueOf() == "string") && (chaine.length > 0)) {

		return chaine.charAt(0).toUpperCase() + chaine.substring(1).toLowerCase();

	}
	else {
		throw 'ERREUR : Mauvais type d\'argument - Chaine de caractère attendu';
	}
}

function capitalize(chaine) {


	if ((typeof chaine.valueOf() == "string") && (chaine.length > 0)) {

		varmots = chaine.toLowerCase().split(" ");
		for (var mot in mots) {
			mots[mot] = mots[mot].substr(0, 1).toUpperCase()+mots[mot].substr(1, mots[mot].length);
		}
		return mots.join(" ");

	}
	else {
		throw 'ERREUR : Mauvais type d\'argument - Chaine de caractère attendu';
	}

}

function camelCase(chaine) {


	if ((typeof chaine.valueOf() == "string") && (chaine.length > 0)) {

		var mots = chaine.toLowerCase().split(" ");
		for (var mot in mots) {
			mots[mot] = mots[mot].substr(0, 1).toUpperCase()+mots[mot].substr(1, mots[mot].length);
		}
		return mots.join("");

	}
	else {
		throw 'ERREUR : Mauvais type d\'argument - Chaine de caractère attendu';
	}

}

function snake_case(chaine) {


	if ((typeof chaine.valueOf() == "string") && (chaine.length > 0)) {

		return chaine.toLowerCase().split(" ").join("-");

	}
	else {
		throw 'ERREUR : Mauvais type d\'argument - Chaine de caractère attendu';
	}

}

function leet(chaine) {

	if ((typeof chaine.valueOf() == "string") && (chaine.length > 0)) {

		var mots = chaine.split(" ");
		var leet = {"A" : "4", "I" : "1", "O" : "0", "U" : "(_)", "Y" : "7"};
		for (var mot in mots) {
			temp = mots[mot].split("");
			for (var i = 0; i < temp.length; i++) {
				if (temp[i] in ) {

				}
			}

		}
		chaine = mots.join(" ");
		return chaine;

	}
	else {
		throw 'ERREUR : Mauvais type d\'argument - Chaine de caractère attendu';
	}

}

function verlan(chaine) {

	if ((typeof chaine.valueOf() == "string") && (chaine.length > 0)) {

		var mots = chaine.split(" ");
		for (var mot in mots) {
			mots[mot] = mots[mot].split("").reverse().join("");
		}
		chaine = mots.join(" ");
		return chaine;

	}
	else {
		throw 'ERREUR : Mauvais type d\'argument - Chaine de caractère attendu';
	}

}

function yoda(chaine) {


	if ((typeof chaine.valueOf() == "string") && (chaine.length > 0)) {

		return chaine.split(" ").reverse().join(" ");

	}
	else {
		throw 'ERREUR : Mauvais type d\'argument - Chaine de caractère attendu';
	}

}

chaine = verlan("bonjour jijeidje JJJJ 3");
console.log(chaine);