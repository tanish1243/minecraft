canvas= new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_image_width= 30;
block_image_height=30;
var player_image_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_image_object=Img;
        player_image_object.scaleToWidth(150);
        player_image_object.scaleToHeight(140);
        player_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_image_object);
    });

}
function newimage(get_image){
    fabric.Image.fromURL(get_image, function (Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);

    });

    
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if( e.shiftKey==true && keypressed=='80' ){
        console.log("p and shift pressed together");
        block_image_height= block_image_height + 10;
        block_image_width= block_image_width +10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("current_height").innerHTML= block_image_height;

    }
    if(e.shiftKey==true && keypressed=='77'){
   console.log("shift and m oressed together");
   block_image_height=block_image_height-10;
   block_image_width=block_image_width-10;
   document.getElementById("current_width").innerHTML=block_image_width;
   document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keypressed=='37'){
        console.log("left pressed");
        left();
    }
    if (keypressed=='38'){
        console.log("up arrow pressed");
        up();
    }
    if(keypressed=='39'){
       console.log("right pressed");
       right();
       }
       if (keypressed=='40'){
           console.log("down pressed");
           down();
       }
       if(keypressed=='87'){
           console.log("w pressed");
           newimage('wall.jpg');
       }
       if(keypressed=='71'){
           console.log("g pressed");
           newimage('ground.png');
       }
       if(keypressed=='76'){
           console.log("L pressed");
           newimage('light_green.png');
       }
       if(keypressed=='84'){
           console.log("t pressed");
           newimage('trunk.jpg');
       }
       if(keypressed=='82'){
           console.log("r pressed")
           newimage('roof.jpg');
       }
       if(keypressed=='89'){
           console.log("y pressed");
           newimage('yellow_wall.png');
       }
       if(keypressed=='68'){
           console.log("d pressed");
           newimage('dark_green.png');
       }
       if(keypressed=='85'){
           console.log("u pressed");
           newimage('unique.png');
       }
       if(keypressed=='67'){
           console.log("c pressed");
           newimage('cloud.jpg');
       }
    
}
 function up(){
     if (player_y > 0){
         player_y= player_y - block_image_height;
         console.log("block image height=" + block_image_height);
         console.log("When up arrow is pressed player x=" + player_x+ " and player y="+ player_y);
         canvas.remove(player_image_object);
         player_update();
     }
 }
 function down(){
     if( player_y <= 500){
         player_y= player_y + block_image_height;
         console.log("Image Height="+ block_image_height);
         console.log("when down arow is pressed Player Y=" + player_y  + " and player X "+ player_x);
         canvas.remove(player_image_object);
         player_update();
    }
 }
  function left(){
      if (player_x>0){
          player_x= player_x-block_image_width;
          console.log("Image Width= "+ block_image_width);
          console.log("When left arrow pressed player Y="+ player_y + "player X"+ player_x);
          canvas.remove(player_image_object);
          player_update();
      }
  }
  function right(){
      if (player_x<=850){
          player_x= player_x+ block_image_width;
          console.log("image width="+block_image_width);
          console.log("when right key pressed X="+ player_x+ "and Y="+player_y);
          canvas.remove(player_image_object);
          player_update();
      }
  }