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
  x = x + 0.01;
  if (x > width) {
    x = 0;
  }

  background(24, 50, 74);

  const lineSpacing = 10;

  for (let x = margin; x < width - margin; x += lineSpacing) {
    for (let y = margin; y < height - margin; y += lineSpacing) {
      drawLine(x, y);
    }
  }
}

function drawLine(lineX, lineY) {
  strokeWeight(1);

  if (isMousePressed) {
    stroke(255, 0, 0);
  } else if (isMouseOverCanvas) {
    stroke(255, 188, 47);
  } else {
    const colorValue = map(lineY, margin, height - margin, 5, 255);
    stroke(colorValue);
  }

  const range = map(lineY, margin, height - margin, 0, 5);

  let prevX = lineX;
  let prevY = lineY;
  const lineSpacing = 55;

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
  isMouseOverCanvas =
    mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height;
  changeColor();
}

function mouseMovedOffCanvas() {
  isMouseOverCanvas = false;
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
