const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

//NOTE - VALUES FOR TURTLE MOVEMENT
let x = 0;
let y = 0;
let vxl = 0;
let vxr = 0;
let vyu = 0;
let vyd = 0;

let Turtle = new Image()
Turtle.src = "./game_images/underwater_neutral_turtle-removebg-preview.png";
turtleWidth = 200;
turtleHeight = 100;
//SECTION - TURTLE ANIMATION
const turtle = () =>{
    x += vxl;
    x += vxr;
    y += vyu;
    y += vyd;

    //NOTE - CONTROLS THE SIZE OF CANVAS SCREEN
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    //NOTE - CONTROLS TURTLE UP AND DOWN ANIMATION
    if(vxr == 8 && vyd == 8 || vyd == 8){
        ctx.save();

        ctx.translate(x+80, y); 
        
        //NOTE - ROTATE TURTLE
        ctx.rotate(0.5); 
        //NOTE - RE-DRAW TRANSFORMED TURTLE
        ctx.drawImage(Turtle,-64,-64, turtleWidth, turtleHeight);
        ctx.restore()
    }else if(vxr == 8 && vyu == -8 || vyu == -8 ){
        ctx.save();

        ctx.translate(x+40, y+80); 

        //NOTE - ROTATE TURTLE
        ctx.rotate(-0.5); 
        
        //NOTE - RE-DRAW TRANSFORMED TURTLE
        ctx.drawImage(Turtle, -64, -64, turtleWidth, turtleHeight);
        ctx.restore()
    }else{
        ctx.drawImage(Turtle, x, y, turtleWidth, turtleHeight)
        
    }
    requestAnimationFrame(turtle)
    
}
turtle()

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















// let keys = {
//     right: false,
//     left: false,
//     up: false,
//     down: false,
// }

// document.addEventListener("keydown", (event) =>{
//     let step = 30;
//     let x = turtle.offsetTop;
//     let y = turtle.offsetLeft;
//     console.log(event.key);
//     if(keys.right && keys.down){
//         y=y+step
//         turtle.style.left = y +'px'
//         x=x+step
//         turtle.style.top = x+'px'
//     }
//     if(keys.right && keys.up){
//         x=x-step
//         turtle.style.top = x+'px'
//         keys.right = true;
//         y=y+step
//         turtle.style.left = y +'px'
//     }
//     if(keys.left && keys.up){
//         x=x-step
//         turtle.style.top = x+'px'
//         y=y-step
//         turtle.style.left = y +'px'
//     }
//     if(keys.left && keys.down){
//         x=x+step
//         turtle.style.top = x+'px'
//         y=y-step
//         turtle.style.left = y +'px'
//     }


//     switch(event.key) {
//         case 'ArrowRight':
//             keys.right = true;
//             turtle.style.left = y + step +'px'
//           break;
//         case 'ArrowLeft':
//             keys.left = true;
//             turtle.style.left = y - step +'px'
//           break;
//         case 'ArrowDown':
//             keys.down = true;
//             turtle.style.top = x+step +'px'
//           break;
//         case 'ArrowUp':
//             keys.up = true;
//             turtle.style.top = x-step+'px'
//           break;
//         default:
//           break;
//       }
// });
 

// document.addEventListener("keyup", (event) =>{
//     if (event.key === "ArrowUp") {
//         keys.up = false;
//     }
//     if (event.key === "ArrowDown") {
//         keys.down = false;
//     }
//     if (event.key === "ArrowRight") {
//         keys.right = false;
//     }
//     if (event.key === "ArrowLeft") {
//         keys.left = false;
//     }
// })



