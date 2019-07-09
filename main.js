
// CANVAS
var canvas = document.getElementById("garden");
var ctx = canvas.getContext('2d');

// SETTING CHARACTER
class Character {
    constructor(x, y, characterImage, width, height) {
        this.x = x;
        this.y = y;
        this.path = characterImage;
        this.width = width;
        this.height = height;
    }
}

var myCharacter = new Character(250, 250, "images/girl.png", 50, 50);

// CHARACTER DRAW FONCTION 
function prepareCharacter(character){
    character.img = new Image();
    character.img.onload = function() {
        ctx.drawImage(character.img, character.x, character.y, character.height, character.width);
    }
    character.img.src = character.path;
    character.upd = function() {
        ctx.drawImage(character.img, character.x, character.y, character.height, character.width);
    }
}

prepareCharacter(myCharacter);

// CHARACTER MOVEMENT
function moveUp(){
    myCharacter.y -= 25
}

function moveDown(){
    myCharacter.y += 25
}

function moveLeft(){
    myCharacter.x -= 25
}

function moveRight(){
    myCharacter.x += 25
}

// SETTING VEGETABLES
class Vegetables {
    constructor(x, y, vgImage, width, height, vgType){
        this.x = x;
        this.y = y;
        this.path = vgImage;
        this.width = width;
        this.height = height;
        this.vgType = vgType;
    }
}

// DRAWING VEGETABLES

var myVegetables = [];

myVegetables.push(new Vegetables(50, 50, "images/tomato.png", 30, 30, "tomato"));
myVegetables.push(new Vegetables(100, 50, "images/tomato.png", 30, 30, "tomato"));
myVegetables.push(new Vegetables(150, 50, "images/tomato.png", 30, 30, "tomato"));
myVegetables.push(new Vegetables(200, 50, "images/tomato.png", 30, 30, "tomato"));

myVegetables.push(new Vegetables(350, 50, "images/pepper.png", 30, 30, "pepper"));
myVegetables.push(new Vegetables(400, 50, "images/pepper.png", 30, 30, "pepper"));
myVegetables.push(new Vegetables(450, 50, "images/pepper.png", 30, 30, "pepper"));
myVegetables.push(new Vegetables(500, 50, "images/pepper.png", 30, 30, "pepper"));

myVegetables.push(new Vegetables(50, 150, "images/cabbage.png", 30, 30, "cabbage"));
myVegetables.push(new Vegetables(100, 150, "images/cabbage.png", 30, 30, "cabbage"));
myVegetables.push(new Vegetables(150, 150, "images/cabbage.png", 30, 30, "cabbage"));
myVegetables.push(new Vegetables(200, 150, "images/cabbage.png", 30, 30, "cabbage"));

myVegetables.push(new Vegetables(350, 150, "images/mushroom.png", 30, 30, "musrhoom"));
myVegetables.push(new Vegetables(400, 150, "images/mushroom.png", 30, 30, "musrhoom"));
myVegetables.push(new Vegetables(450, 150, "images/mushroom.png", 30, 30,"musrhoom"));
myVegetables.push(new Vegetables(500, 150, "images/mushroom.png", 30, 30,"musrhoom"));

myVegetables.push(new Vegetables(50, 250, "images/bean.png", 30, 30, "bean"));
myVegetables.push(new Vegetables(100, 250, "images/bean.png", 30, 30, "bean"));
myVegetables.push(new Vegetables(150, 250, "images/bean.png", 30, 30, "bean"));
myVegetables.push(new Vegetables(200, 250, "images/bean.png", 30, 30, "bean"));

myVegetables.push(new Vegetables(350, 250, "images/carrot.png", 30, 30, "carrot"));
myVegetables.push(new Vegetables(400, 250, "images/carrot.png", 30, 30, "carrot"));
myVegetables.push(new Vegetables(450, 250, "images/carrot.png", 30, 30, "carrot"));
myVegetables.push(new Vegetables(500, 250, "images/carrot.png", 30, 30, "carrot"));

myVegetables.push(new Vegetables(50, 350, "images/pumpkin.png", 30, 30, "pumpkin"));
myVegetables.push(new Vegetables(100, 350, "images/pumpkin.png", 30, 30, "pumpkin"));
myVegetables.push(new Vegetables(150, 350, "images/pumpkin.png", 30, 30, "pumpkin"));
myVegetables.push(new Vegetables(200, 350, "images/pumpkin.png", 30, 30, "pumpkin"));

myVegetables.push(new Vegetables(350, 350, "images/aubergine.png", 30, 30, "aubergine"));
myVegetables.push(new Vegetables(400, 350, "images/aubergine.png", 30, 30, "aubergine"));
myVegetables.push(new Vegetables(450, 350, "images/aubergine.png", 30, 30, "aubergine"));
myVegetables.push(new Vegetables(500, 350, "images/aubergine.png", 30, 30, "aubergine"));

myVegetables.push(new Vegetables(50, 450, "images/turnip.png", 30, 30, "turnip"));
myVegetables.push(new Vegetables(100, 450, "images/turnip.png", 30, 30, "turnip"));
myVegetables.push(new Vegetables(150, 450, "images/turnip.png", 30, 30, "turnip"));
myVegetables.push(new Vegetables(200, 450, "images/turnip.png", 30, 30, "turnip"));

myVegetables.push(new Vegetables(350, 450, "images/broccoli.png", 30, 30, "broccoli"));
myVegetables.push(new Vegetables(400, 450, "images/broccoli.png", 30, 30, "broccoli"));
myVegetables.push(new Vegetables(450, 450, "images/broccoli.png", 30, 30, "broccoli"));
myVegetables.push(new Vegetables(500, 450, "images/broccoli.png", 30, 30, "broccoli"));

myVegetables.push(new Vegetables(50, 550, "images/leek.png", 30, 30, "leek"));
myVegetables.push(new Vegetables(100, 550, "images/leek.png", 30, 30, "leek"));
myVegetables.push(new Vegetables(150, 550, "images/leek.png", 30, 30, "leek"));
myVegetables.push(new Vegetables(200, 550, "images/leek.png", 30, 30, "leek"));

myVegetables.push(new Vegetables(350, 550, "images/garlic.png", 30, 30, "garlic"));
myVegetables.push(new Vegetables(400, 550, "images/garlic.png", 30, 30, "garlic"));
myVegetables.push(new Vegetables(450, 550, "images/garlic.png", 30, 30, "garlic"));
myVegetables.push(new Vegetables(500, 550, "images/garlic.png", 30, 30, "garlic"));

myVegetables.forEach(veggie => drawVegetables(veggie))

// VEGETABLES DRAWING FUNCTION 

function drawVegetables(veggie){
    veggie.img = new Image();
    veggie.img.onload = function() {
        ctx.drawImage(veggie.img, veggie.x, veggie.y, veggie.height, veggie.width)
    }
    veggie.img.src = veggie.path;
    veggie.updVeggies = function() {
        ctx.drawImage(veggie.img, veggie.x, veggie.y, veggie.height, veggie.width)
    }
}

// KEY LISTENERS
  document.onkeydown = function(e) {
    e.preventDefault()
    switch (e.keyCode) {
      case 38: moveUp(); break;
      case 40: moveDown(); break;
      case 37: moveLeft(); break;
      case 39: moveRight(); break;
    }
    collisionCheck(myCharacter, myVegetables);
    updateCanvas();
  }

  function updateCanvas(){
      ctx.clearRect(0,0, canvas.width, canvas.height);
      myVegetables.forEach(veggie => veggie.updVeggies());
      myCharacter.upd()
      setBoundaries(myCharacter);
  }

// SETTING BOUNDARIES 
function setBoundaries(character){
    if (character.x < 0){
        character.x = 0;
    }
    if (character.y < 0){
        character.y = 0;
    }
    if (character.x > canvas.width - character.width){
        character.x = canvas.width - character.width;
    }
    if (character.y > canvas.height - character.width){
        character.y = canvas.height - character.width;
    }
}

// COLLISIONS

var vegetableCollision = []

function checkForCollision(character, veggie) {
    if (character.x < veggie.x + veggie.width &&
        character.x + character.width > veggie.x &&
        character.y < veggie.y + veggie.height && 
        character.y + character.height > veggie.y){
            return true;
        }
}

function collisionCheck(myCharacter, vegetableArray){
    for (i=0; i< vegetableArray.length; i++) {
        if (checkForCollision(myCharacter, vegetableArray[i])){
            vegetableCollision.push(vegetableArray[i]);
            vegetableArray.splice(i, 1)
            whenCollision();
            reDrawEverything();
        }
    }
}

function reDrawEverything() {
    myVegetables.forEach(veggie => drawVegetables(veggie));
    prepareCharacter(myCharacter);
}

var pickedVegetables = [];
var myBasket = [];

function whenCollision() {
    //////////////////////////////////////////////////////////////////////////////////:
    // TO BE MODIFIED ACCORDING TO THE RECIPE //
    if (recipeBook['recipe'][0]['ingredients'].includes(vegetableCollision[0].vgType)){
        console.log("good choice");
        pickedVegetables.push(vegetableCollision[0])
        updateBasket();
        pickedVegetables = [];
    } else {
        console.log("wrong vg!")
    }
    vegetableCollision = [];
}
