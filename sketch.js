var fixedrect,movingrect;
function setup(){
  createCanvas(1200,800);
  fixedrect=createSprite(400,100,50,80);
  fixedrect.shapecolour=green;
  fixedrect.debug=true;

  movingrect=createSprite(400,800,50,80);
  movingrect.shapecolour=green;
  movingrect.debug=true;
}
function draw() {
  background(0,0,0);
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
      movingrect.shapecolour=red;
      fixedrect.shapecolour=red;
    }
   drawSprite();
  }
  