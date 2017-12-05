drawAllWispyClouds(240, 240, 240);
function drawWispyClouds(red, green, blue) {
  penDown();
  penWidth(15);
  penRGB(red, green, blue);
  turnRight(90);
  arcLeft(90, 25);
  arcRight(90, 25);
  dot(15);
  arcLeft(90, 25);
  dot(25);
  arcRight(90, 25);
  dot(35);
  arcLeft(90, 25);
  dot(45);
  arcRight(90, 25);
  dot(55);
  arcLeft(90, 25);
  penUp();
}
//Draw Different Clouds
function drawAllWispyClouds() {
  drawWispyClouds(200, 200, 240);
moveTo(150, 236)
drawWispyClouds(240, 240, 240);
  moveTo(212, 448);
  drawWispyClouds(200, 200, 240);
  moveTo(1, 130);
  drawWispyClouds(200, 200, 240);
  moveTo(1, 115);
  drawWispyClouds(240, 240, 240);
  moveTo(220,448);
  drawWispyClouds(240, 240, 240);
  moveTo(153, 144);
  drawWispyClouds(200, 200, 240);
  moveTo(143, 144);
  drawWispyClouds(240, 240, 240);
  moveTo(240, 288);
  drawWispyClouds(200, 200, 240);
  moveTo(250, 288);
  drawWispyClouds(240, 240, 240);
}
