let grassY = 0;
let grassW = 0;
let grassH = 0;

let bladeW = 0;
let bladeH = 0;
let bladeStart = 0;
let bladeStop = 0;

let capyX = 0;
let capyY = 0;
let headX = 0;
let headY = 0;
let earX = 0;
let earY = 0;
let eyeX = 0;
let eyeY = 0;
let smileX = 0;
let smileY = 0;
let armX = 0;
let armY = 0;
let legX = 0;
let legY = 0;

var blade = [];
var cloud = [];
var bladeDirection;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  noCursor();

  grassW = windowWidth;
  grassH = windowHeight / 2.5;
  grassY = windowHeight - grassH;

  bladeW = 70;
  bladeH = 200;
  bladeStart = PI;
  bladeStop = PI + QUARTER_PI;
  bladeDirection = false;

  capyX = 81;
  capyY = grassY;
  headX = capyX + 55;
  headY = grassY - 20;
  earX = headX - 15;
  earY = headY - 22;
  eyeX = headX + 10;
  eyeY = headY - 10;
  smileX = headX + 17;
  smileY = headY + 2;
  armX = capyX + 50;
  armY = capyY + 20;
  legX = capyX - 50;
  legY = armY;

  for (var i = 0; i < 1000; i++) {
    blade[i] = new Blades();
  }

  for (var j = 0; j < 7; j++) {
    cloud[j] = new Clouds();
  }
}

function draw() {
  background("deepskyblue");

  Sun();

  for (var i = 0; i < 7; i++) {
    cloud[i].animate();
    cloud[i].cloud();
  }

  Grass();

  Capy();

  for (var j = 0; j < 1000; j++) {
    blade[j].animate();
    blade[j].blade();
  }
}

function Grass() {
  fill("green");
  noStroke();
  rect(0, grassY, grassW, grassH);
}

function Sun() {
  fill("yellow");
  noStroke();
  circle(windowWidth - 150, 100, 150);
}

function Blades() {
  this.x = random(grassW + 50);
  this.y = random(windowHeight / 1.55, windowHeight);

  this.blade = function () {
    noFill();
    stroke("forestgreen");
    strokeWeight(4);
    arc(this.x, this.y, bladeW, bladeH, bladeStart, bladeStop);
  };

  this.animate = function () {
    if (bladeH >= 300) {
      bladeDirection = true;
    } else if (bladeH <= 100) {
      bladeDirection = false;
    }

    if (bladeDirection == false) {
      bladeH = bladeH + 0.5;
    } else if (bladeDirection == true) {
      bladeH = bladeH - 0.5;
    }
  };
}

function Clouds() {
  this.x = random(windowWidth);
  this.y = random(grassH);

  this.cloud = function () {
    fill(250);
    noStroke();
    ellipse(this.x, this.y, 70, 50);
    ellipse(this.x + 10, this.y + 10, 70, 50);
    ellipse(this.x - 20, this.y + 10, 70, 50);
  };

  this.animate = function () {
    this.x = this.x + 5;

    if (this.x > windowWidth) {
      this.x = 0;
    }
  };
}

function Capy() {
  noStroke();
  fill(179, 141, 104);
  ellipse(capyX, capyY, 150, 80);
  ellipse(headX, headY, 70, 60);
  rect(armX, armY, 15, 30);
  rect(legX, legY, 15, 30);

  fill(84, 58, 35);
  arc(earX, earY, 20, 20, PI - QUARTER_PI, 0, OPEN);

  fill("black");
  ellipse(eyeX, eyeY, 5, 5);

  noFill();
  stroke("black");
  arc(smileX, smileY, 15, 10, 0, PI);

  if (keyIsDown(LEFT_ARROW)) {
    capyX = capyX - 5;
    headX = headX - 5;
    earX = earX - 5;
    eyeX = eyeX - 5;
    smileX = smileX - 5;
    armX = armX - 5;
    legX = legX - 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    capyX = capyX + 5;
    headX = headX + 5;
    earX = earX + 5;
    eyeX = eyeX + 5;
    smileX = smileX + 5;
    armX = armX + 5;
    legX = legX + 5;
  }
}
