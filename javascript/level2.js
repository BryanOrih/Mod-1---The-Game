const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let Turtle = new Image()
turtleRotation = [
    "../game_images/neutralSwimUp.png",
    "../game_images/swimRight.png",
    "../game_images/leftSwim.png",
    "../game_images/swimUpAnimation.png",

]
Turtle.src = turtleRotation[0];
let x = window.innerWidth/2.5;
let y = window.innerHeight/1.5;
let vxl = 0;
let vxr = 0;
let vyu = 0;
let vyd = 0;

class player {
    constructor(image, width, height,x,y){
        this.image = image
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    drawImg(image){
        this.image.src = image
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}
let turtleInfo = new player(Turtle, 500,300, x, y)

const level2 = () => {
    if(turtleInfo.x < window.innerWidth){
        turtleInfo.x= turtleInfo.x
    }
    // else if(turtleInfo.x > maxWidthBorder){
    //     turtleInfo.x = maxWidthBorder
    // }
    // if(turtleInfo.y < -30){
    //     turtleInfo.y = -30
    // } else if(turtleInfo.y > maxHeightBorder){
    //     turtleInfo.y = maxHeightBorder
    // }
    // console.log(turtleInfo.x, turtleInfo.y);
    ctx.clearRect(0,0,canvas.width, canvas.height)
    turtleInfo.x += vxl;
    turtleInfo.x += vxr;
    turtleInfo.y += vyu;
    turtleInfo.y += vyd;

    //NOTE - CONTROLS TURTLE UP AND DOWN ANIMATION
    if(vxr == 8 && vyu == -8){
        turtleInfo.drawImg(turtleRotation[1])   
    }else if(vxl == -8 && vyu == -8 ){
        turtleInfo.drawImg(turtleRotation[2])
    }else if(vxl == -8 && vyd == 8){
        turtleInfo.drawImg(turtleRotation[1])   
    }else if(vxr == 8 && vyd == 8 ){
        turtleInfo.drawImg(turtleRotation[2])
    }else{
        turtleInfo.drawImg(turtleRotation[0])    
    }
    requestAnimationFrame(level2) 
}
level2()

//SECTION - TURTLE MOVEMENT
addEventListener('keydown', function(e){
    if(e.code == 'ArrowRight'){
        vxr = 8 
    } 
    if(e.code == 'ArrowLeft'){
        vxl = -8
    } 
    if(e.code == 'ArrowUp'){
        vyu = -8
    } 
    if(e.code == 'ArrowDown'){
        vyd = 8
    } 
})

addEventListener('keyup', function(e){
    if(e.code == 'ArrowRight') vxr = 0
    if(e.code == 'ArrowLeft') vxl = 0
    if(e.code == 'ArrowUp') vyu = 0
    if(e.code == 'ArrowDown') vyd = 0
})