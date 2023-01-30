function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  strokeWeight(random(1, 10));
  stroke(random(0, 255), random(0, 255), random(0, 255));
  let x1 = random(0, width);
  let y1 = random(0, height);
  let x2 = random(0, width);
  let y2 = random(0, height);
  line(x1, y1, x2, y2);
}
