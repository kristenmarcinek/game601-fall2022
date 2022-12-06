var bubble = [];
var balloonMolly = [];

let score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // bubbles setup
  for (var i = 0; i < 3; i++) {
    bubble[i] = new Bubbles();
  }

  // placing fish
  for (var j = 0; j < 5; j++) {
    balloonMolly[j] = new BalloonMolly();
  }
}

function draw() {
  // background
  background(51, 204, 255);

  // bubbles animate
  for (var i = 0; i < 3; i++) {
    bubble[i].animate();
    bubble[i].bubble();
  }

  // fish animate
  for (var j = 0; j < 5; j++) {
    balloonMolly[j].animate();
    balloonMolly[j].balloonMolly();
  }

  // score
  fill(255);
  textSize(40);
  text(score, 100, 100);
}

function Bubbles() {
  // bubble locations
  this.x = random(windowWidth - 50);
  this.y = random(windowHeight + 90);

  this.bubble = function () {
    fill("Aqua");
    stroke("White");

    // biggest bubble
    ellipse(this.x, this.y, 70);

    // medium bubble
    ellipse(this.x + 50, this.y + 60, 50);

    // smallest bubble
    ellipse(this.x, this.y + 90, 25);
  };

  // bubbles animation
  this.animate = function () {
    this.y = this.y - 0.5;

    if (this.y <= -90) {
      this.y = windowHeight;
    }
  };
}

function BalloonMolly(x, y, size) {
  this.x = random(-25, windowWidth / 2);
  this.y = random(0, windowHeight);
  this.size = random(65, 95);

  this.balloonMolly = function () {
    noStroke();
    fill("orange");
    ellipse(this.x, this.y, this.size);
  };

  this.animate = function () {
    let d = dist(this.x, this.y, mouseX, mouseY);

    this.x = this.x + 3;

    if (this.x >= windowWidth) {
      this.x = 0;
    }

    if (mouseIsPressed == true && d < this.size / 2) {
      score = score + 1;
      this.x = random(0, windowWidth);
      this.y = random(0, windowHeight);
    }
  };
}
