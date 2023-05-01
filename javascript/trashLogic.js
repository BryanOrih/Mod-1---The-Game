
let trashBag = new Image()
let sixPackRing = new Image()
let bottle = new Image()
bottle.src = "../game_images/waterbottle.png";
trashBag.src = "../game_images/TrashBag.png";
sixPackRing.src = "../game_images/sixPackRing.png";

class TrashObject{
    constructor(image,width,height,x,y){
        this.image = image
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.randomNum = 3
        //TODO - FIX THIS AFTER TESTING
        // this.randomNum = Math.floor(Math.random() * (20 - 8 + 1) + 8);
        this.angle = Math.random() * 360
    }
    startReset(){
        this.randomNum = 3
        //TODO - FIX THIS AFTER TESTING
        // this.randomNum = Math.floor(Math.random() * (20 - 8 + 1) + 8)
        this.x = window.innerWidth+100;
        this.y = window.innerHeight - Math.floor(Math.random() * (window.innerHeight - 10 + 1) + 10);
        this.angle = Math.random() * 360
    }
    drawImage(){
        ctx.save();
        ctx.beginPath(); 
        ctx.strokeStyle = '#f00';  // some color/style
        ctx.lineWidth = 2;  
        this.x -= this.randomNum
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle* Math.PI/360); 
        ctx.drawImage(this.image, 0,0, this.width, this.height)
        ctx.strokeRect(0,0, this.width, this.height);
        ctx.restore()
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
    // gameOver(turtleInfo, bottleInfo)
    // gameOver(turtleInfo, trashBagInfo)
    // gameOver(turtleInfo, sixPackRingInfo)
    requestAnimationFrame(trash)
}

//SECTION - GAME OVER FUNCTION
const gameOver = (object1, object2) =>{
    let left1 = object1.x;
    let left2 = object2.x;
    let right1 = object1.x + object1.width;
    let right2 = object2.x + object2.width;
    let top1 = object1.y;
    let top2 = object2.y;
    let bottom1 = object1.y + object1.height;
    let bottom2 = object2.y + object2.height;

    if (bottom1 < top2) return(false);
    if (top1 > bottom2) return(false);

    if (right1 < left2) return(false);
    if (left1 > right2) return(false);
    location.reload()
    // document.querySelector('body').innerHTML = "Game Over"



}

trash()