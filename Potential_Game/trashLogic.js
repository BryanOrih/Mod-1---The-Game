
let trashBag = new Image()
console.log(trashBag);
let sixPackRing = new Image()
let bottle = new Image()
bottle.src = "./game_images/waterbottle.png";
trashBag.src = "./game_images/TrashBag.png"
sixPackRing.src = "./game_images/sixPackRing.png"

class TrashObject{
    constructor(image,width,height,x,y){
        this.image = image
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.randomNum = 5
        //TODO - FIX THIS AFTER TESTING
        // this.randomNum = Math.floor(Math.random() * (20 - 8 + 1) + 8);
        this.angle = Math.random() * 360
    }
    startReset(){
        this.randomNum = 5
        //TODO - FIX THIS AFTER TESTING
        // this.randomNum = Math.floor(Math.random() * (20 - 8 + 1) + 8)
        this.x = window.innerWidth+10;
        this.y = window.innerHeight - Math.floor(Math.random() * (window.innerHeight - 10 + 1) + 10);
        this.angle = Math.random() * 360
    }
    drawImage(){
        ctx.save();
        this.x -= this.randomNum
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle* Math.PI/360); 
        ctx.drawImage(this.image, 0,0, this.width, this.height)
        ctx.restore()
    }
    ifGameOver(){
        gameOver(x,y, turtleWidth, turtleHeight, this.x, this.y, this.width, this.height)
    }
}
console.log(window.innerHeight);
//NOTE - TRASH INFO CREATION
let bottleInfo = new TrashObject(bottle, 80, 150, window.innerWidth+10, window.innerHeight - Math.floor(Math.random() * (1000 - 10 + 1) + 200))
let trashBagInfo = new TrashObject(trashBag, 100, 120, window.innerWidth+10, window.innerHeight - Math.floor(Math.random() * (1000 - 10 + 1) + 200))
let sixPackRingInfo = new TrashObject(sixPackRing, 150, 120, window.innerWidth+10, window.innerHeight - Math.floor(Math.random() * (1000 - 10 + 1) + 200))
//SECTION - TRASH FUNCTIONALITY
const trash = () =>{

    //NOTE - IF AT END THEN RESET TO THE BEGINNING WITH RANDOM ROTATION & Y POSITION
    //ELSE JUST KEEP GOING INTO THAT DIRECTION
    bottleInfo.x < 0 ?  bottleInfo.startReset() : bottleInfo.drawImage()
    trashBagInfo.x < 0 ? trashBagInfo.startReset() : trashBagInfo.drawImage()
    sixPackRingInfo.x < 0 ? sixPackRingInfo.startReset() : sixPackRingInfo.drawImage()
    //NOTE - CHECK IF GAME OVER
    bottleInfo.ifGameOver()
    trashBagInfo.ifGameOver()
    sixPackRingInfo.ifGameOver()
    requestAnimationFrame(trash)
}

//SECTION - GAME OVER FUNCTION
const gameOver = (turtleX, turtleY, turtleWidth, turtleHeight, trashX, trashY, trashWidth, trashHeight) =>{
    trashWidth = trashWidth - 20;
    trashX = trashX - 80
    if (turtleX < trashX + trashWidth &&
        turtleX + turtleWidth > trashX &&
        turtleY < trashY + trashHeight &&
        turtleY + turtleHeight > trashY){
            //TODO - CHANGE ONCE COMPLETE
            // document.querySelector('body').innerHTML = "Game Over"
            location.reload()
    } 
}

trash()