penColor("darkBlue");
dot(5000);
function drawAllStars() {
  for (var i = 0; i < 25; i++) {
    penUp();
    moveTo(randomNumber(0, 320), randomNumber(0, 230));
    move(25, 25);
    drawStar(5, 5);
  }
}
function drawStar() {
  penColor("white");
  dot(3);
}
drawAllStars(5);
