let canvas;
let cafe; 
let angle = 0;
let rotating = true; 

function preload() {
  cafe = loadModel('/3D/cafe.obj');
}

function setup() {
  canvas = createCanvas(600, 600, WEBGL);
  canvas.parent("canvascontainer");
}

function draw() {
  background(220);
  scale(50);
  rotateX(380);
  rotateZ (0);
  rotateY(angle);
 fill ("#402218");
  model(cafe);

  if (rotating) {
    angle += 0.11;
  }
}

function mouseClicked() {
  rotating = false; 
}
