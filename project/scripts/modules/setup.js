import { Joueur } from '../classes/joueur.js'
import { Monstre } from '../classes/monstre.js'

var hero = new Joueur("Joueur1", 40, 256);
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
  mainTitle.innerHTML = "{{nom}}";

  var scoreBoard = document.createElement('div');
  scoreBoard.innerHTML = "Score : {{_score}}";
  scoreBoard.setAttribute("id", "scoreBoard");
  document.getElementById('hud').appendChild(mainTitle);
  document.getElementById('hud').appendChild(scoreBoard);

  document.getElementById("hud").innerHTML = document.getElementById("hud").innerHTML.interpolate(hero);
}

export function buildMainFrame() {

  //canvas
var canvas = document.createElement("canvas");
canvas.setAttribute("id", "canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;
document.getElementById('root').appendChild(canvas);
document.getElementById('canvas').style.borderStyle = "solid";


// Background
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = "images/background.png";

// Hero
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
  heroReady = true;
};
heroImage.src = "images/hero.png";

// Monstre
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
  monsterReady = true;
};
monsterImage.src = "images/monstre.png";

// Objet
var monster = {};
var monster = new Monstre("Monstre1", 40);
var monstersCaught = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
}, false);

// Reset quand on touche le monstre
var reset = function () {
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;

  // Deplace le monstre
  monster.x = 32 + (Math.random() * (canvas.width - 64));
  monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update
var update = function (modifier) {
  if (38 in keysDown) { // Player holding up
    hero.y -= hero.speed * modifier;
  }
  if (40 in keysDown) { // Player holding down
    hero.y += hero.speed * modifier;
  }
  if (37 in keysDown) { // Player holding left
    hero.x -= hero.speed * modifier;
  }
  if (39 in keysDown) { // Player holding right
    hero.x += hero.speed * modifier;
  }

  // Collision
  if (
    hero.x <= (monster.x + 32)
    && monster.x <= (hero.x + 32)
    && hero.y <= (monster.y + 32)
    && monster.y <= (hero.y + 32)
  ) {
    hero.score++;
    reset();
  }
};

// Draw
var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }

  if (heroReady) {
    ctx.drawImage(heroImage, hero.x, hero.y);
  }

  if (monsterReady) {
    ctx.drawImage(monsterImage, monster.x, monster.y);
  }

  document.getElementById("scoreBoard").innerHTML = "Score : " + hero.score;
};

// The main game loop
var main = function () {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;

  
  requestAnimationFrame(main);
};

// Cross-browser support
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now();
reset();
main();
}
export function initiate(){
  function UndefinedPropertyError(path, property, object) {
    var allProperty = Object.keys(object);
    this.message = "Property '"+property+"' not exist for path '"+path+"', expected one of : ["+allProperty.join(",")+"]";
    this.name = "UndefinedPropertyError";
  }

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
        try{
          return objectToAccess.prop_access(expr);
        }catch(e){
          console.error(e.message);
        }
    });
  }
}
