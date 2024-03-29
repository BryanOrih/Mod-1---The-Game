
let trashBag = new Image()
let sixPackRing = new Image()
let bottle = new Image()
bottle.src = "../game_images/waterbottle.png";
trashBag.src = "../game_images/TrashBag.png";
sixPackRing.src = "../game_images/sixPackRing.png";
// console.log(bottle);
const level1Trash = [
    {
        image: new Image(),
        src:"../game_images/waterbottle.png",
        x:80,
        y:150},
    {
        image: new Image(),
        src:"../game_images/TrashBag.png",
        x:100,
        y:120},
    {
        image: new Image(),
        src:"../game_images/sixPackRing.png",
        x:150,
        y:120}
]
class TrashObject{
    constructor(image,width,height,x,y){
        this.image = image
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        // this.randomNum = 5
        //TODO - FIX THIS AFTER TESTING
        this.randomNum = Math.floor(Math.random() * (3 - 8 + 1) + 8);
        this.angle = Math.random() * 360
    }
    startReset(){
        // this.randomNum = 5
        //TODO - FIX THIS AFTER TESTING
        this.randomNum = Math.floor(Math.random() * (3 - 8 + 1) + 8)
        this.x = window.innerWidth+130;
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
    static startReset(object){
        // object.image.src = object.src
        // // console.log(object.image);
        // ctx.save();
        // this.x -= this.randomNum
        // ctx.translate(this.x, this.y)
        // ctx.rotate(this.angle* Math.PI/360); 
        // ctx.drawImage(object.image, 0,0, this.width, this.height)
        // ctx.restore()
    }
    static drawImage(object){
        object.image.src = object.src
        // console.log(object.image);
        ctx.save();
        this.x -= this.randomNum
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle* Math.PI/360); 
        ctx.drawImage(object.image, 0,0, this.width, this.height)
        ctx.restore()
    }
}
TrashObject.startReset(level1Trash[0])
//NOTE - TRASH INFO CREATION
let bottleInfo = new TrashObject(bottle, 80, 150, window.innerWidth+10, window.innerHeight - Math.floor(Math.random() * (1000 - 10 + 1) + 200))
let trashBagInfo = new TrashObject(trashBag, 100, 120, window.innerWidth+10, window.innerHeight - Math.floor(Math.random() * (1000 - 10 + 1) + 200))
let sixPackRingInfo = new TrashObject(sixPackRing, 150, 120, window.innerWidth+10, window.innerHeight - Math.floor(Math.random() * (1000 - 10 + 1) + 200))

//NOTE - LOOP AND TOSTAGETWO ARE THE CUT SCENES FUNCTIONS FOR THE NEXT STAGE
let loop = false
const toStageTwo = () =>{
    ctx.clearRect(0,0,canvas.width, canvas.height)
    if(turtleInfo.x < 650 || loop === true){
        loop = true
        turtleInfo.x++
    }else if (turtleInfo.x < 900){
        turtleInfo.x+=.5
    }else{
        turtleInfo.x +=.1
    }
    turtleInfo.y -= 3.5
    if(turtleInfo.y <= -30){
        window.location.href = "../html/level2.html";
        cancelAnimationFrame(toStageTwo)
    }
    turtleInfo.rotation(-.5)
    requestAnimationFrame(toStageTwo) 
}


//SECTION - TRASH FUNCTIONALITY
const trash = () =>{

    //NOTE - IF AT END THEN RESET TO THE BEGINNING WITH RANDOM ROTATION & Y POSITION
    //ELSE JUST KEEP GOING INTO THAT DIRECTION
    // bottleInfo.x < 0 ?  bottleInfo.startReset() : bottleInfo.drawImage()
    // trashBagInfo.x < 0 ? trashBagInfo.startReset() : trashBagInfo.drawImage()
    // sixPackRingInfo.x < 0 ? sixPackRingInfo.startReset() : sixPackRingInfo.drawImage()
    //NOTE - CHECK IF GAME OVER
    gameOver(turtleInfo, bottleInfo)
    gameOver(turtleInfo, trashBagInfo)
    gameOver(turtleInfo, sixPackRingInfo)

    if(document.getElementById("timer").textContent == 0){
        sixPackRingInfo.startReset()
        trashBagInfo.startReset()
        bottleInfo.startReset()
        toStageTwo()
        cancelAnimationFrame(trash)
    }else{

        bottleInfo.x < 0 ?  bottleInfo.startReset() : bottleInfo.drawImage()
        trashBagInfo.x < 0 ? trashBagInfo.startReset() : trashBagInfo.drawImage()
        sixPackRingInfo.x < 0 ? sixPackRingInfo.startReset() : sixPackRingInfo.drawImage()
        requestAnimationFrame(trash)    
    }
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
    document.querySelector('body').innerHTML = "Game Over"



}
