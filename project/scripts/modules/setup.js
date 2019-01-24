import { Joueur } from '../classes/joueur.js'

// HUD - Titre, infos, score, etc
export function buildHUD() {

  var player = new Joueur("Alexandre", 40);

  //Padding ROOT
  document.getElementById('root').style.padding = "10px";

  // HUD DIV - Creation de l'hud
  var hud = document.createElement('div');
  hud.setAttribute("id", "hud");
  document.getElementById('root').appendChild(hud);

  // maintTitle H1 - Creation du titre de l'application
  var mainTitle = document.createElement('h1');
  mainTitle.setAttribute("id", "mainTitle");
  mainTitle.innerHTML = "{{nom}}";
  document.getElementById('hud').appendChild(mainTitle);

  document.getElementById("root").innerHTML = document.getElementById("root").innerHTML.interpolate(player);

}

export function buildMainFrame() {

  // mainFrame DIV - Creation de la mainFrame qui va contenir le jeu
  var mainFrame = document.createElement('div');
  mainFrame.setAttribute("id", "mainFrame");
  mainFrame.style.position = "relative";
  document.getElementById('root').appendChild(mainFrame);
  document.getElementById('mainFrame').style.height = "600px";
  document.getElementById('mainFrame').style.width = "800px";
  document.getElementById('mainFrame').style.borderStyle = "solid";

  var player = document.createElement('div');
  player.setAttribute("id", "player");
  player.style.height = "20px";
  player.style.width = "20px";
  player.style.background = "green";
  player.style.position = "absolute";
  player.style.left = "0";
  player.style.top = "0";

  mainFrame.appendChild(player);
}

export function initiate(){
  Object.prototype.prop_access = function(accessString){
    var attributesTab = accessString.split('.');
    var temp = this;
    for (let index=0; index<attributesTab.length; index++ ){
      let word = attributesTab[index];
      if(temp[word] != null){
        temp = temp[word];
      }else{
        throw new UndefinedPropertyError(accessString,word,temp);
      }
    }
    return temp;
  }

  String.prototype.interpolate = function(objectToAccess){
    return this.replace(/\{{(\w+)\}}/g, function(match, expr) {
        return objectToAccess.prop_access(expr);
    });
  }
}
