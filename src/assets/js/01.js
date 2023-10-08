const margin = 10;
let x = 0;
let isMouseOverCanvas = false;
let isMousePressed = false;

function setup() {
  const canvasDiv = document.getElementById("myCanvas");
  const canvas = createCanvas(500, 500);
  canvas.parent(canvasDiv);
  noLoop();

  canvas.mouseMoved(checkMouseOverCanvas);
  canvas.mousePressed(mousePressedOnCanvas);
  canvas.mouseReleased(mouseReleasedOnCanvas);
  canvas.mouseOut(mouseMovedOffCanvas);
}

function draw() {
  x += 0.01;
  if (x > width) {
    x = 0;
  }

  background(24, 50, 74);

  const lineSpacing = 10;

  for (let xPos = margin; xPos < width - margin; xPos += lineSpacing) {
    for (let yPos = margin; yPos < height - margin; yPos += lineSpacing) {
      drawLine(xPos, yPos);
    }
  }
}

function drawLine(lineX, lineY) {
  const minColor = 5;
  const maxColor = 255;
  const lineSpacing = 55;
  const range = map(lineY, margin, height - margin, 0, 5);

  let prevX = lineX;
  let prevY = lineY;

  for (let x = lineX + lineSpacing; x < width - margin; x += lineSpacing) {
    const y = lineY + random(-range, range);
    line(prevX, prevY, x, y);

    prevX = x;
    prevY = y;
  }
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}

function mousePressedOnCanvas() {
  isMousePressed = true;
  changeColor();
}

function mouseReleasedOnCanvas() {
  isMousePressed = false;
  changeColor();
}

function checkMouseOverCanvas() {
  const isMouseInsideCanvas =
    mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height;
  if (isMouseInsideCanvas) {
    changeColor();
  }
}

function mouseMovedOffCanvas() {
  mouseOverCanvas = false;
  changeColor();
}

function changeColor() {
  if (isMousePressed) {
    stroke(255, 0, 0);
  } else if (isMouseOverCanvas) {
    stroke(255, 188, 47);
  } else {
    stroke(255);
  }
}
