const turtle = document.getElementById("turtle")

let keys = {
    right: false,
    left: false,
    up: false,
    down: false,
}
//SECTION - TURTLE MOVEMENT
document.addEventListener("keydown", (event) =>{
    let step = 15;
    let x = turtle.offsetTop;
    let y = turtle.offsetLeft;
    // console.log(event.key);
    if(keys.right && keys.down){
        y=y+step
        turtle.style.left = y +'px'
        x=x+step
        turtle.style.top = x+'px'
    }
    if(keys.right && keys.up){
        x=x-step
        turtle.style.top = x+'px'
        keys.right = true;
        y=y+step
        turtle.style.left = y +'px'
    }
    if(keys.left && keys.up){
        x=x-step
        turtle.style.top = x+'px'
        y=y-step
        turtle.style.left = y +'px'
    }
    if(keys.left && keys.down){
        x=x+step
        turtle.style.top = x+'px'
        y=y-step
        turtle.style.left = y +'px'
    }


    switch(event.key) {
        case 'ArrowRight':
            right(y, step, keys)
          break;
        case 'ArrowLeft':
            left(y, step, keys)
          break;
        case 'ArrowDown':
            keys.down = true;
            x=x+step
            turtle.style.top = x+'px'
          break;
        case 'ArrowUp':
            keys.up = true;
            x=x-step
            turtle.style.top = x+'px'
          break;
        default:
          break;
      }



    // if(event.key == 'ArrowRight'){
    //     keys.right = true;
    //     y = turtle.offsetLeft;
    //     y=y+step
    //     turtle.style.left = y +'px'
    // }else if(event.key == 'ArrowLeft'){
    //     keys.left = true;
    //     y = turtle.offsetLeft;
    //     y=y-step
    //     turtle.style.left = y +'px'
    // }else if(event.key == 'ArrowDown'){
    //     keys.down = true;
    //     x = turtle.offsetTop;
    //     x=x+step
    //     turtle.style.top = x+'px'
    // }else if(event.key == 'ArrowUp'){
    //     keys.up = true;
    //     x = turtle.offsetTop;
    //     x=x-step
    //     turtle.style.top = x+'px'
    // }
});
function right(y, step, keys){
    keys.right = true;
    y=y+step
    turtle.style.left = y + step +'px'
}
function left(y, step, keys){
    keys.left = true;
    y=y-step
    turtle.style.left = y +'px'
}
document.addEventListener("keyup", (event) =>{
    if (event.key === "ArrowUp") {
        keys.up = false;
    }
    if (event.key === "ArrowDown") {
        keys.down = false;
    }
    if (event.key === "ArrowRight") {
        keys.right = false;
    }
    if (event.key === "ArrowLeft") {
        keys.left = false;
    }
})
