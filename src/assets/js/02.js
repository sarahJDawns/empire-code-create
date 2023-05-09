function setup() {
  const canvasDiv = document.getElementById("myCanvas");
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(canvasDiv);
}

function draw() {
  noLoop();
  background(150, 230, 191);
}
