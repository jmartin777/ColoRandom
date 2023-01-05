class Color {
    constructor() {
        this.locked = false;

    }
}

var boxes = document.querySelectorAll('.box')


window.addEventListener('load',setRandomColor);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
    
  }

  function setRandomColor() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = getRandomColor();
      }
    }
