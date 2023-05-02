const readySetGo = document.querySelector(".readyGo")
const percentWidth = (percentage) =>{return window.innerWidth/100 * percentage}
const percentHeight = (percentage) =>{return window.innerHeight/100 * percentage}
let timer;
let timeLeft = 20;
const updateTimer = () =>{
    timeLeft = timeLeft - 1;
    if(timeLeft >= 0)
     document.getElementById("timer").textContent = timeLeft;
    else {
        console.log("game ended");
    }
}

const startTimer = () => {
    timer = setInterval(updateTimer, 1000);
}


const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
//NOTE - CONTROLS THE SIZE OF CANVAS SCREEN
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

maxWidthBorder = window.innerWidth - 130
maxHeightBorder = window.innerHeight - 80

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
    }
    drawImg(){
        // ctx.beginPath(); 
        // ctx.strokeStyle = '#f00';  // some color/style
        // ctx.lineWidth = 2
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
    rotation(angle){
        ctx.save();
        // ctx.beginPath(); 
        // ctx.strokeStyle = '#f00';  // some color/style
        // ctx.lineWidth = 2
        ctx.translate(this.x, this.y); 
        ctx.rotate(angle); 
        ctx.drawImage(this.image, 0, 0, this.width, this.height);
        // ctx.strokeRect( 0, 0 , this.width, this.height);
        ctx.restore()
    }
}
let turtleInfo = new player(Turtle, 200,100, x, y)
//SECTION - TURTLE ANIMATION
const turtle = () =>{
        if(turtleInfo.x < -100){
            turtleInfo.x= -100
        }else if(turtleInfo.x > maxWidthBorder){
            turtleInfo.x = maxWidthBorder
        }
        if(turtleInfo.y < -30){
            turtleInfo.y = -30
        } else if(turtleInfo.y > maxHeightBorder){
            turtleInfo.y = maxHeightBorder
        }
    ctx.clearRect(0,0,canvas.width, canvas.height)
    turtleInfo.x += vxl;
    turtleInfo.x += vxr;
    turtleInfo.y += vyu;
    turtleInfo.y += vyd;

    //NOTE - CONTROLS TURTLE UP AND DOWN ANIMATION
    if(vxr !=0 && vyd !=0 || vyd !=0){

        turtleInfo.rotation(.8)
            
    }else if(vxr !=0 && vyu !=0 || vyu !=0 ){

        turtleInfo.rotation(-.8)

    }else{

        turtleInfo.drawImg()
        
    }
    switch (timeLeft){
        case 0:
            cancelAnimationFrame(turtle)
            break;
        default:
            requestAnimationFrame(turtle) 
            break; 
    }
}
turtle()

//SECTION - TURTLE MOVEMENT
addEventListener('keydown', function(e){
    if(e.code == 'ArrowRight'){
        vxr =  percentWidth(.2)
    } 
    if(e.code == 'ArrowLeft'){
        vxl = percentWidth(-.2)
    } 
    if(e.code == 'ArrowUp'){
        vyu = percentHeight(-.2)
    } 
    if(e.code == 'ArrowDown'){
        vyd = percentHeight(.2)
    } 
})
addEventListener('keyup', function(e){
    if(e.code == 'ArrowRight') vxr = 0
    if(e.code == 'ArrowLeft') vxl = 0
    if(e.code == 'ArrowUp') vyu = 0
    if(e.code == 'ArrowDown') vyd = 0
})


const startGame = async() =>{
    await delay(1800)
    readySetGo.textContent = "Set"
    await delay(1800)
    readySetGo.textContent = "Go"
    await delay(1800)
    readySetGo.style.visibility = "hidden"
    document.querySelector(".timer").style.visibility = "visible"
    document.getElementById("timer").textContent = timeLeft;    
    startTimer()
    await delay(1000)
    trash()
}

const delay = ms => new Promise(res => setTimeout(res, ms));
turtle()
startGame()


