// write your code here
 function setColor(pixel, r, g, b) {
  pixel.setRed(r);
  pixel.setGreen(g);
  pixel.setBlue(b);
 }
 var image = new SimpleImage("seattle-skyline.jpg");
 var w = image.getWidth();
 var h = image.getHeight();
 var newim = new SimpleImage(w, h);
 for (var p of image.values()) {
  // gray scale for all image
  var all = (p.getRed() + p.getGreen() + p.getBlue()) / 2;
  p.setRed(all);
  p.setBlue(all);
  p.setGreen(all);
  var x = p.getX();
  var y = p.getY();
  var mx = image.getPixel(x, y);
  oneFourthX = Math.floor(w / 15);
  threeFourthsX = Math.floor(w / 4 * 3.7);
  oneHalfy = Math.floor(h / 2);
  oneFourthY = Math.floor(h / 15);
  threeFourthsY = Math.floor(h / 4 * 3.7);
  if (p.getX() < 3 || p.getX() > w - 3 ||
    p.getY() < 3 || p.getY() > h - 3) {
    // RGB color below  is a black color
    setColor(p, 0, 0, 0);
  }
  // add three thinner vertical bars for a window pane
  else {
    if (Math.abs(oneFourthX - p.getX()) < 2 ||
      Math.abs(threeFourthsX - p.getX()) < 2) {
      // add thinner vertical  bars for a window pane
      setColor(p, 255, 0, 191);
    }
    // add one thin horizontal bar
    else {
      if (Math.abs(oneFourthY - p.getY()) < 2 ||
        Math.abs(threeFourthsY - p.getY()) < 2) {
        setColor(p, 255, 0, 191);
      } else {
        // just use the pixel from the original image
        mx.setRed(p.getRed());
        mx.setGreen(p.getGreen());
        mx.setBlue(p.getBlue());
      }
    }
  }
 }
 print(image);