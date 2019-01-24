// HUD - Titre, infos, score, etc
export function buildHUD() {

  //Padding ROOT
  document.getElementById('root').style.padding = "10px";

  // HUD DIV - Creation de l'hud
  var hud = document.createElement('div');
  hud.setAttribute("id", "hud");
  document.getElementById('root').appendChild(hud);

  // maintTitle H1 - Creation du titre de l'application
  var mainTitle = document.createElement('h1');
  mainTitle.setAttribute("id", "mainTitle");
  mainTitle.innerHTML = "WWOOOSH !";
  document.getElementById('hud').appendChild(mainTitle);

}

export function buildMainFrame() {

  // mainFrame DIV - Creation de la mainFrame qui va contenir le jeu
  var mainFrame = document.createElement('div');
  mainFrame.setAttribute("id", "mainFrame");
  document.getElementById('root').appendChild(mainFrame);
  document.getElementById('mainFrame').style.height = "600px";
  document.getElementById('mainFrame').style.width = "800px";
  document.getElementById('mainFrame').style.borderStyle = "solid";


}