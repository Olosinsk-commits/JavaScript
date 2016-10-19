 function extract(im) {
  var nim = new SimpleImage(im.width, im.height);
  for (var px of im.values()) {
    var x = px.getX();
    var y = px.getY();
    var npx = nim.getPixel(x, y);
    npx.setRed(transform(px.getRed()));
    npx.setGreen(transform(px.getGreen()));
    npx.setBlue(transform(px.getBlue()));
  }
  return nim;
 }
 function transform(num) {
  return (num - (Math.floor(num / 16) * 16)) * 16 + 16;
 }
 var start = new SimpleImage("test1.png");
 start = extract(start);
 print(start);