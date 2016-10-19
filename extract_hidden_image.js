function extract(img){
 for(var px of img.values()){
 /* the modulus of the division is multiplied by 16 */
 px.setRed(16*(px.getRed()%16));
 px.setGreen(16*(px.getGreen()%16));
 px.setBlue(16*(px.getBlue()%16));
   }
 return img;
   }
 var start = new SimpleImage("test1.png");
 start = extract(start);
 print(start);