function extract(im){
  var nim = new SimpleImage(im.width, im.height);    
    for(var px of im.values()){
    var x = px.getX();
    var y = px.getY();
    var npx = nim.getPixel(x,y);
    var num = px.getRed();
    npx.setRed((num - ( Math.floor(num /16) * 16)) * 16 + 16);
    num = px.getGreen();
    npx.setGreen((num - ( Math.floor(num /16) * 16)) * 16 + 16);
    num = px.getBlue();
    npx.setBlue((num - ( Math.floor(num /16) * 16)) * 16 + 16);
       }
   return nim;
  }
  var start = new SimpleImage("test1.png");
  start = extract(start);
  print(start);