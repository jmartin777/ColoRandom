

var boxes = document.querySelectorAll('.box')
var codes = document.querySelectorAll('.color-hex')


window.addEventListener('load',setRandomColor);
window.addEventListener('load',setRandomCode)

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var hexColor = '#';
  for (var i = 0; i < 6; i++) {
    hexColor += letters[Math.floor(Math.random() * 16)];
  } console.log(hexColor)
  return hexColor;
  

}


function setRandomColor() {
  for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.backgroundColor = getRandomColor();
    }
  }

function setRandomCode() {
  for (let i = 0; i < 6; i++) {
    codes[i].innerText = getRandomColor();
  }
  
}