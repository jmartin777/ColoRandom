
var locked1 = document.querySelector('#lock1')
var locked2 = document.querySelector('#lock2')
var locked3 = document.querySelector('#lock3')
var locked4 = document.querySelector('#lock4')
var locked5 = document.querySelector('#lock5')
var unlocked1 = document.querySelector('#unlock1')
var unlocked2 = document.querySelector('#unlock2')
var unlocked3 = document.querySelector('#unlock3')
var unlocked4 = document.querySelector('#unlock4')
var unlocked5 = document.querySelector('#unlock5')
var boxes = document.querySelectorAll('.box')
var codes = document.querySelectorAll('.color-hex')

window.addEventListener('load',setRandomColor);
// window.addEventListener('load',setRandomCode)
window.addEventListener('click',lockColor1)
window.addEventListener('dblclick', unlockColor1)

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
    codes.innerText = getRandomColor();
  }
}
   function lockColor1() {
    console.log(event.target)
    unlocked1.classList.add('hidden')
    locked1.classList.remove('hidden');
  };

function unlockColor1() {
  unlocked1.classList.remove('hidden')
  locked1.classList.add('hidden')
  
}