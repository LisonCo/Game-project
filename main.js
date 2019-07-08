
// CANVAS

var canvas = document.getElementById("garden");
var ctx = canvas.getContext('2d');

// SETTING CHARACTER
class Character {
    constructor(x, y, characterImage, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = characterImage;
    }

    drawCharacter(){
        var img = new Image();
        img.onload = function() {
            ctx.drawImage(img, this.x, this.y, this.height, this.width)
        }.bind(this)
        img.src = this.img;
    }

    moveUp(){
        this.y -= 25
    }

    moveDown(){
        this.y += 25
    }

    moveLeft(){
        this.x -= 25
    }

    moveRight(){
        this.x += 25
    }
}

// SETTING VEGETABLES
class Vegetables {
    constructor(x, y, vgImage){
        this.x = x;
        this.y = y;
        this.img = vgImage;
    }

    drawVegetables(){
        var img = new Image();
        img.onload = function() {
            ctx.drawImage(img, this.x, this.y)
        }.bind(this)
        img.src = this.img;
    }
}

// NEW GARDEN 

var myCharacter = new Character(500, 500, "Images/smiley.jpg", 100, 100);
myCharacter.drawCharacter();
var carrot1 = new Vegetables(300, 300, "Images/carrot.png");
carrot1.drawVegetables();
var carrot2 = new Vegetables(800, 800, "Images/carrot.png");
carrot2.drawVegetables();

// KEY LISTENERS
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38: myCharacter.moveUp(); break;
      case 40: myCharacter.moveDown(); break;
      case 37: myCharacter.moveLeft(); break;
      case 39: myCharacter.moveRight(); break;
    }
    updateCanvas();
  }

  function updateCanvas(){
      ctx.clearRect(0,0, canvas.width, canvas.height);
      myCharacter.drawCharacter();
      setBoundaries(myCharacter);
  }

//   SETTING BOUNDARIES 

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


// var rect1 = {x: 5, y: 5, width: 50, height: 50}
// var rect2 = {x: 20, y: 10, width: 10, height: 10}

// if (rect1.x < rect2.x + rect2.width &&
//    rect1.x + rect1.width > rect2.x &&
//    rect1.y < rect2.y + rect2.height &&
//    rect1.y + rect1.height > rect2.y) {
//     // collision detected!
// }

// // filling in the values =>

// if (5 < 30 &&
//     55 > 20 &&
//     5 < 20 &&
//     55 > 10) {
//     // collision detected!
// }
