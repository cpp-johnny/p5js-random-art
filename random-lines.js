function setup() {
  createCanvas(400, 400);
  background(51);
}

function draw() {
  stroke(255);
  strokeWeight(2);
  let x1 = random(width);
  let y1 = random(height);
  let x2 = random(width);
  let y2 = random(height);
  line(x1, y1, x2, y2);
}
