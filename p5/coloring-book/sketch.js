function setup() {
	createCanvas(windowWidth, windowHeight);
	background('gray');
	noCursor();
}

let value_r = 255;
let value_g = 255;
let value_b = 255;

function draw() {
	background('gray');
	
	fill (value_r, value_g, value_b);
	
	ellipse(width/2, height/2, 300, 300);
	
	stroke(0, 0, 0);
	ellipse(width/2.2, height/2.25, 25, 25);
	ellipse(width/1.85, height/2.25, 25, 25);
	
	arc(width/2, height/2, 35, 10, 0, PI);
	
	fill(255, 255, 255);
	triangle(mouseX - 30, mouseY + 60, mouseX, mouseY, mouseX + 30, mouseY + 60);
}

function mouseClicked() {
  if (value_r === 255 && value_g == 255 && value_b == 255) {
    value_r = 255;
		value_g = 255;
		value_b = 0;
  }
}