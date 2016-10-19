Code to hide and extract image:

// Steganography

var ShowImage= new SimpleImage("image1.png");
 var HideImage= new SimpleImage("image2.jpg");
 var BIT=2;
 function crop(image,width,height)
 { var output= new SimpleImage(width,height);
  for(var outpx of output.values())
  { var x=outpx.getX();
    var y=outpx.getY();
    var px= image.getPixel(x,y);
    outpx.setRed(px.getRed());
    outpx.setGreen(px.getGreen());
    outpx.setBlue(px.getBlue());
  }
  return output;
 }
 var crw=Math.min(ShowImage.getWidth(),HideImage.getWidth());
 var crh=Math.min(ShowImage.getHeight(),HideImage.getHeight());
 var crSImg= crop(ShowImage,crw,crh);
 var crHImg= crop(HideImage,crw,crh);
 print(crSImg);
 print(crHImg);
 function chopcrS(pixel,bit)
 { var r= Math.floor(pixel.getRed()/Math.pow(2,bit))*Math.pow(2,bit);
  var g= Math.floor(pixel.getGreen()/Math.pow(2,bit))*Math.pow(2,bit);
  var b= Math.floor(pixel.getBlue()/Math.pow(2,bit))*Math.pow(2,bit);
  pixel.setRed(r);
  pixel.setGreen(g);
  pixel.setBlue(b);
  return pixel;
 }
 function shiftcrH(pixel,bit)
 { var r= Math.floor(pixel.getRed()/Math.pow(2,8-bit));
  var g= Math.floor(pixel.getGreen()/Math.pow(2,8-bit));
  var b= Math.floor(pixel.getBlue()/Math.pow(2,8-bit));
  pixel.setRed(r);
  pixel.setGreen(g);
  pixel.setBlue(b);
  return pixel;
 }
 function combine(px1,px2,px)
 { px.setRed(px1.getRed()+px2.getRed());
  px.setGreen(px1.getGreen()+px2.getGreen());
  px.setBlue(px1.getBlue()+px2.getBlue());
  return px;
 }
 var outImg= new SimpleImage(crw,crh);
 for(var px of outImg.values())
 { var x=px.getX(); var y=px.getY();
  var pxS= crSImg.getPixel(x,y);
  var pxH= crHImg.getPixel(x,y);
    px=combine(chopcrS(pxS,BIT),shiftcrH(pxH,BIT),px);
 }
 print(outImg);

//extract hidden img 
function extHid(inpx,extpx,bit){
    var r=(inpx.getRed()-Math.floor(inpx.getRed()/Math.pow(2,bit))*Math.pow(2,bit))*Math.pow(2,8-bit);
    var g=(inpx.getGreen()-Math.floor(inpx.getGreen()/Math.pow(2,bit))*Math.pow(2,bit))*Math.pow(2,8-bit);
    var b=(inpx.getBlue()-Math.floor(inpx.getBlue()/Math.pow(2,bit))*Math.pow(2,bit))*Math.pow(2,8-bit);
    extpx.setRed(r); extpx.setGreen(g); extpx.setBlue(b);
    return extpx;
 }
 var extImg= new SimpleImage(crw,crh);
 for(var extpx of extImg.values()){
    var x0=extpx.getX(); var y0=extpx.getY();
    var oripx= outImg.getPixel(x0,y0);
    extpx= extHid(oripx,extpx,BIT);
 }
 print(extImg);

//extract hidden img 
 var outImg= new SimpleImage("image3.png");
 var BIT=2;
 var crw=outImg.getWidth(); var crh=outImg.getHeight();
 function extHid(inpx,extpx,bit){
    var r=(inpx.getRed()-Math.floor(inpx.getRed()/Math.pow(2,bit))*Math.pow(2,bit))*Math.pow(2,8-bit);
    var g=(inpx.getGreen()-Math.floor(inpx.getGreen()/Math.pow(2,bit))*Math.pow(2,bit))*Math.pow(2,8-bit);
    var b=(inpx.getBlue()-Math.floor(inpx.getBlue()/Math.pow(2,bit))*Math.pow(2,bit))*Math.pow(2,8-bit);
    extpx.setRed(r); extpx.setGreen(g); extpx.setBlue(b);
    return extpx;
 }
 var extImg= new SimpleImage(crw,crh);
 for(var extpx of extImg.values()){
    var x0=extpx.getX(); var y0=extpx.getY();
    var oripx= outImg.getPixel(x0,y0);
    extpx= extHid(oripx,extpx,BIT);
 }
 print(extImg);