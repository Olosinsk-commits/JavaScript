 function dist(pixel, x0, y0) {
      var dx1 = pixel.getX() - x0;
      var dy1 = pixel.getY() - y0;
      return Math.sqrt(dx1 * dx1 + dy1 * dy1);
    }
    function dist1(pixel, x, y) {
      var dx = pixel.getX() - x;
      var dy = pixel.getY() - y;
      return Math.sqrt(dx * dx + dy * dy) / 2;
    }
    function setColor(pixel, r, g, b) {
        pixel.setRed(r);
        pixel.setGreen(g);
        pixel.setBlue(b);
      }
      //start with a blank image
    var image = new SimpleImage(256, 256);
    for (var px of image.values()) {
      //Set Background Color
      setColor(px, 0, 102, 255);
      //Draw the background snowlakes
      if (Math.random() > 0.995) {
        setColor(px, 255, 255, 255);
      }
      if (dist(px, 125, 205) <= 50) {
        //bottom circle    
        px.setRed((255 - 2 * dist(px, 125, 205)));
        px.setGreen((255 - 2 * dist(px, 125, 205)));
        px.setBlue((255 - 2 * dist(px, 125, 205)));
      }
      //second circle
      if (dist(px, 125, 135) <= 35) {
        px.setRed((255 - 2 * dist(px, 125, 135)));
        px.setGreen((255 - 2 * dist(px, 125, 135)));
        px.setBlue((255 - 2 * dist(px, 125, 135)));
      }
      //head
      if (dist(px, 125, 85) <= 20) {
        px.setRed((255 - 2 * dist(px, 125, 85)));
        px.setGreen((255 - 2 * dist(px, 125, 85)));
        px.setBlue((255 - 2 * dist(px, 125, 85)));
      }
    }
    for (var px of image.values()) {
      if (dist1 (px, 130, 85)  <= 2 || (dist1(px, 120, 85)) <= 2) {
        setColor(px, 0, 0, 0);
      }
    }
    for (var pixel of image.values()) {
      if (pixel.getY() > 95) {
        if (dist(pixel, 125, 97) < 5) {
          setColor(pixel, 255, 0, 255);
        }
      }
    }
    print(image);