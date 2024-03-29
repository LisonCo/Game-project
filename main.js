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
    moveUp(){
        myCharacter.y -= 25
    }

    moveDown(){
        myCharacter.y += 25
    }

    moveLeft(){
        myCharacter.x -= 25
    }

    moveRight(){
        myCharacter.x += 25
    }
}

var myCharacter = new Character(270, 270, "images/girl.png", 50, 50);

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

myVegetables.push(new Vegetables(50, 50, "images/tomato.png", 30, 30, "Tomato"));
myVegetables.push(new Vegetables(100, 50, "images/tomato.png", 30, 30, "Tomato"));
myVegetables.push(new Vegetables(50, 100, "images/tomato.png", 30, 30, "Tomato"));
myVegetables.push(new Vegetables(100, 100, "images/tomato.png", 30, 30, "Tomato"));

myVegetables.push(new Vegetables(350, 100, "images/pepper.png", 30, 30, "Pepper"));
myVegetables.push(new Vegetables(400, 100, "images/pepper.png", 30, 30, "Pepper"));
myVegetables.push(new Vegetables(350, 150, "images/pepper.png", 30, 30, "Pepper"));
myVegetables.push(new Vegetables(400, 150, "images/pepper.png", 30, 30, "Pepper"));

myVegetables.push(new Vegetables(150, 150, "images/cabbage.png", 30, 30, "Cabbage"));
myVegetables.push(new Vegetables(200, 150, "images/cabbage.png", 30, 30, "Cabbage"));
myVegetables.push(new Vegetables(150, 200, "images/cabbage.png", 30, 30, "Cabbage"));
myVegetables.push(new Vegetables(200, 200, "images/cabbage.png", 30, 30, "Cabbage"));

myVegetables.push(new Vegetables(450, 50, "images/mushroom.png", 30, 30, "Mushroom"));
myVegetables.push(new Vegetables(500, 50, "images/mushroom.png", 30, 30, "Mushroom"));
myVegetables.push(new Vegetables(450, 100, "images/mushroom.png", 30, 30,"Mushroom"));
myVegetables.push(new Vegetables(500, 100, "images/mushroom.png", 30, 30,"Mushroom"));

myVegetables.push(new Vegetables(50, 250, "images/bean.png", 30, 30, "Peas"));
myVegetables.push(new Vegetables(100, 250, "images/bean.png", 30, 30, "Peas"));
myVegetables.push(new Vegetables(150, 250, "images/bean.png", 30, 30, "Peas"));
myVegetables.push(new Vegetables(200, 250, "images/bean.png", 30, 30, "Peas"));

myVegetables.push(new Vegetables(350, 250, "images/carrot.png", 30, 30, "Carrot"));
myVegetables.push(new Vegetables(400, 250, "images/carrot.png", 30, 30, "Carrot"));
myVegetables.push(new Vegetables(450, 250, "images/carrot.png", 30, 30, "Carrot"));
myVegetables.push(new Vegetables(500, 250, "images/carrot.png", 30, 30, "Carrot"));

myVegetables.push(new Vegetables(50, 350, "images/pumpkin.png", 30, 30, "Pumpkin"));
myVegetables.push(new Vegetables(50, 400, "images/pumpkin.png", 30, 30, "Pumpkin"));
myVegetables.push(new Vegetables(50, 450, "images/pumpkin.png", 30, 30, "Pumpkin"));
myVegetables.push(new Vegetables(50, 500, "images/pumpkin.png", 30, 30, "Pumpkin"));

myVegetables.push(new Vegetables(350, 350, "images/aubergine.png", 30, 30, "Eggplant"));
myVegetables.push(new Vegetables(400, 350, "images/aubergine.png", 30, 30, "Eggplant"));
myVegetables.push(new Vegetables(350, 400, "images/aubergine.png", 30, 30, "Eggplant"));
myVegetables.push(new Vegetables(400, 400, "images/aubergine.png", 30, 30, "Eggplant"));

myVegetables.push(new Vegetables(150, 400, "images/avocado.png", 30, 30, "Avocado"));
myVegetables.push(new Vegetables(200, 400, "images/avocado.png", 30, 30, "Avocado"));
myVegetables.push(new Vegetables(150, 450, "images/avocado.png", 30, 30, "Avocado"));
myVegetables.push(new Vegetables(200, 450, "images/avocado.png", 30, 30, "Avocado"));

myVegetables.push(new Vegetables(500, 350, "images/broccoli.png", 30, 30, "Broccoli"));
myVegetables.push(new Vegetables(500, 400, "images/broccoli.png", 30, 30, "Broccoli"));
myVegetables.push(new Vegetables(500, 450, "images/broccoli.png", 30, 30, "Broccoli"));
myVegetables.push(new Vegetables(500, 500, "images/broccoli.png", 30, 30, "Broccoli"));

myVegetables.push(new Vegetables(50, 550, "images/leek.png", 30, 30, "Leek"));
myVegetables.push(new Vegetables(100, 550, "images/leek.png", 30, 30, "Leek"));
myVegetables.push(new Vegetables(150, 550, "images/leek.png", 30, 30, "Leek"));
myVegetables.push(new Vegetables(200, 550, "images/leek.png", 30, 30, "Leek"));

myVegetables.push(new Vegetables(350, 550, "images/garlic.png", 30, 30, "Garlic"));
myVegetables.push(new Vegetables(400, 550, "images/garlic.png", 30, 30, "Garlic"));
myVegetables.push(new Vegetables(450, 550, "images/garlic.png", 30, 30, "Garlic"));
myVegetables.push(new Vegetables(300, 550, "images/garlic.png", 30, 30, "Garlic"));

myVegetables.forEach(veggie => drawVegetables(veggie))

var defaultVegetables = [].concat(myVegetables) 

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
      case 38: myCharacter.moveUp(); break;
      case 40: myCharacter.moveDown(); break;
      case 37: myCharacter.moveLeft(); break;
      case 39: myCharacter.moveRight(); break;
    }
    collisionCheck(myCharacter, myVegetables);
    updateCanvas(myCharacter, myVegetables);
  }

  function updateCanvas(character, vegetables){
      ctx.clearRect(0,0, canvas.width, canvas.height);
      vegetables.forEach(veggie => veggie.updVeggies());
      character.upd()
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
            recipeComplete();
            reDrawEverything(myVegetables, myCharacter);
        }
    }
}

// Redraw the canvas after each click
function reDrawEverything(vegetableArray, character) {
    vegetableArray.forEach(veggie => drawVegetables(veggie));
    character.upd();
}

var pickedVegetables = [];
var myBasket = {};

// What happened after a collision 
function whenCollision() {
    if (currentRecipe['ingredients'].includes(vegetableCollision[0].vgType)){
        goodPick();
        pickedVegetables.push(vegetableCollision[0])
        updateBasket();
        if(myBasket[vegetableCollision[0].vgType]) {
            myBasket[vegetableCollision[0].vgType] ++;
        } else {
            myBasket[vegetableCollision[0].vgType] = 1;
        }
        pickedVegetables = [];
    } else {
        wrongPick()
    }
    vegetableCollision = [];
}

// Checks if all the ingredients of the recipe have been picked
function recipeComplete(){
    var myCount = 0
    for (i=0; i< currentRecipe['ingredients'].length; i++){
        if(myBasket[currentRecipe['ingredients'][i]]){
            myCount++;
            if (myCount == currentRecipe['ingredients'].length){
            recipeReady();
            }
         } 
    }
}



