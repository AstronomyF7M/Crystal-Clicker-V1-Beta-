let score = 0;
let item1Lvl = 0;
let item2Lvl = 0;
let autoClickLvl = 0;

let backgroundLvl = 0; // new
let dotX = 0;
let dotY = 50;

function setup() {
  createCanvas(windowWidth, 200)
}

function draw() {
  // Maybe new
  if (autoClickLvl > 0 && frameCount%60 == 0) {
    score = score + (item1Lvl+1)*autoClickLvl
    document.getElementById('score').innerText = score;
  }
  
  if (score > 50) {
    document.getElementById("surprise").style.visibility = "visible";
  }
 
  background('yellow')
  dotX = dotX + 5
  if (dotX > width) {
    dotX = 0
  }
  
  ellipse(dotX, dotY, 20, 20)
}

function addScore(){
  score = score + (item1Lvl+1)
  
  document.getElementById('score').innerText = score;
}

function buyClick() {
  let itemPrice = item1Lvl*10 + 10;
  
  if (score >= itemPrice) {
    score = score - itemPrice
    item1Lvl = item1Lvl + 1
    
    document.getElementById('score').innerText = score
    document.getElementById('item1').innerText = item1Lvl*10 + 10
  }
}

// Maybe new
function buyAutoClick() {
  let itemPrice = (autoClickLvl+1)*50
  
  if (score >= itemPrice) {
    score = score - itemPrice
    autoClickLvl = autoClickLvl + 1
    
    document.getElementById('score').innerText = score
    document.getElementById('autoScore').innerText = (item1Lvl+1)*autoClickLvl
    document.getElementById('autoClick').innerText = (autoClickLvl+1)*50
  }
}

// Everything after is new
function buyBackground() {
  let itemPrice = (backgroundLvl+1)*250
  
  if (score >= itemPrice) {
    score = score - itemPrice
    backgroundLvl = backgroundLvl + 1
    
    document.getElementById('score').innerText = score
    document.getElementById('background').innerText = (backgroundLvl+1)*250
    document.getElementById('btn-' + backgroundLvl).style.visibility = "visible"
  }
}

function bg(color) {
  document.getElementById("container").style.backgroundColor = color
}
