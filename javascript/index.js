let timer;
let timeLeft = 20;
document.getElementById("timer").textContent = timeLeft;

const updateTimer = () =>{
    timeLeft = timeLeft - 1;
    if(timeLeft >= 0)
     document.getElementById("timer").textContent = timeLeft;
    else {
        console.log("game ended");
    }
}


const start = () => {
    timer = setInterval(updateTimer, 1000);
}
//FIXME - MAKE THIS A BUTTON FOR THE BEGINNING HTML PAGE
start()


const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
//NOTE - CONTROLS THE SIZE OF CANVAS SCREEN
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;


let Turtle = new Image()
Turtle.src = "../game_images/underwater_neutral_turtle-removebg-preview.png";

//NOTE - VALUES FOR TURTLE MOVEMENT
let x = 0;
let y = 0;
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
        // this.vxl = 0;
        // this.vxr = 0;
        // this.vyu = 0;
        // this.vyd = 0;
    }
    drawImg(){
        ctx.beginPath(); 
        ctx.strokeStyle = '#f00';  // some color/style
        ctx.lineWidth = 2
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
    rotation(angle){
        ctx.save();
        ctx.beginPath(); 
        ctx.strokeStyle = '#f00';  // some color/style
        ctx.lineWidth = 2
        ctx.translate(this.x, this.y); 
        ctx.rotate(angle); 
        ctx.drawImage(this.image, 0, 0, this.width, this.height);
        ctx.strokeRect( 0, 0    , this.width, this.height);
        ctx.restore()
    }
}
let turtleInfo = new player(Turtle, 200,100, x, y)
// turtleInfo.width = 200;
// turtleInfo.height = 100;
maxWidthBorder = window.innerWidth - 100
maxHeightBorder = window.innerHeight - 50
//SECTION - TURTLE ANIMATION
const turtle = () =>{
    ctx.clearRect(0,0,canvas.width, canvas.height)
    if(x < -100){
        x= -100
    }else if(x > maxWidthBorder){
        x = maxWidthBorder
    }
    if(y < -30){
        y = -30
    } else if(y > maxHeightBorder){
        y = maxHeightBorder
    }
    turtleInfo.x += vxl;
    turtleInfo.x += vxr;
    turtleInfo.y += vyu;
    turtleInfo.y += vyd;

    //NOTE - CONTROLS TURTLE UP AND DOWN ANIMATION
    if(vxr == 5 && vyd == 5 || vyd == 5){

        turtleInfo.rotation(.5)
            
    }else if(vxr == 5 && vyu == -5 || vyu == -5 ){

        turtleInfo.rotation(-.5)

    }else{

        turtleInfo.drawImg()
        
    }
    requestAnimationFrame(turtle)
    
}
turtle()

//SECTION - TURTLE MOVEMENT
addEventListener('keydown', function(e){
    if(e.code == 'ArrowRight'){
        vxr = 5 
    } 
    if(e.code == 'ArrowLeft'){
        vxl = -5
    } 
    if(e.code == 'ArrowUp'){
        vyu = -5
    } 
    if(e.code == 'ArrowDown'){
        vyd = 5
    } 
})
addEventListener('keyup', function(e){
    if(e.code == 'ArrowRight') vxr = 0
    if(e.code == 'ArrowLeft') vxl = 0
    if(e.code == 'ArrowUp') vyu = 0
    if(e.code == 'ArrowDown') vyd = 0
})






