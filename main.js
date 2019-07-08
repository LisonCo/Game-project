
// CANVAS

var canvas = document.getElementById("garden");
var ctx = canvas.getContext('2d');

//  SETTING GARDEN

var path = {
    x : 100,
    y : 100,
}

function preparePath(path) {
    var img = new Image();
    img.onload = function() {
       path.img = img;
       this.drawPath()
    }.bind(this);
    img.src = "Images/path.png";
  }

  function drawPath() {
    ctx.drawImage(path.img, 0, 0, path.img.width, path.img.height, 50, 50, path.img.width, path.img.height);
  }

// SETTING CHARACTER
var character = {
    x: 500,
    y: 500,
    moveUp:    function() { this.y -= 25 },
    moveDown:  function() { this.y += 25 },
    moveLeft:  function() { this.x -= 25 },
    moveRight: function() { this.x += 25 },
  }

//   function draw(character) {
//     var img = new Image();
//     img.onload = function() {
//        ctx.drawImage(img, ghost.x, ghost.y, 50, 50);
//     }
//     img.src = "https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif";
//   }

//   SETTING VEGETABLES

// KEY LISTENERS
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38: character.moveUp();    console.log('up',    character); break;
      case 40: character.moveDown();  console.log('down',  character); break;
      case 37: character.moveLeft();  console.log('left',  character); break;
      case 39: character.moveRight(); console.log('right', character); break;
    }
    updateCanvas();
  }

//   updateCanvas() {

//   }
