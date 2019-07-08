
// CANVAS

var canvas = document.getElementById('garden');
var ctx = canvas.getContext('2d');

//  SETTING GARDEN

// SETTING CHARACTER
var character = {
    x: 500,
    y: 500,
    moveUp:    function() { this.y -= 25 },
    moveDown:  function() { this.y += 25 },
    moveLeft:  function() { this.x -= 25 },
    moveRight: function() { this.x += 25 },
  }

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

  updateCanvas() {

  }


