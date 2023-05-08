function draw() {
  background(200);

  rectMode(CENTER);
  fill(241, 197, 0);
  noStroke();
  rect(100, 50, 25, 75, 15, 20, 10, 5);

  noSmooth();
  line(0, 50, 400, 300);

  quad(100, 50, 200, 100, 69, 63, 47, 76);

  rectMode(CORNER);
  fill(241, 197, 0);
  noStroke();
  rect(120, 55, 15, 78, 15, 20, 10, 5);
}
