// Global Variables  ===
var currentPalette
var savedPalettes = []

var color1 = new Color()
var color2 = new Color()
var color3 = new Color()
var color4 = new Color()
var color5 = new Color()
// var firstColor = color1.getRandomColor()
// var secondColor = color2.getRandomColor()
// var thirdColor = color3.getRandomColor()
// var fourthColor = color4.getRandomColor()
// var fifthColor = color5.getRandomColor()
//var allColors = new Palette(firstColor, secondColor, thirdColor, fourthColor, fifthColor)
var allColors = new Palette(newRandomColor());
var rightSection = document. querySelector('.right-section')
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
var colorBoxContainer = document.querySelector('.color-boxes-container')
var codes = document.querySelectorAll('.color-hex')

var buttonNewPalette = document.getElementById('new');
var buttonSavePalette = document.getElementById('save');

window.addEventListener('load', updatePalette);
// buttonSavePalette.addEventListener('click', )
buttonNewPalette.addEventListener('click', updatePalette);

function updatePalette() {
  allColors.colors = newRandomColor();
  setRandomColor();

}

function newRandomColor() {
  var firstColor = color1.getRandomColor()
  var secondColor = color2.getRandomColor()
  var thirdColor = color3.getRandomColor()
  var fourthColor = color4.getRandomColor()
  var fifthColor = color5.getRandomColor()

var NewPaletteOnClick = [firstColor, secondColor, thirdColor, fourthColor, fifthColor];

return NewPaletteOnClick;
}

function setRandomColor() {
  
  for (let i = 0; i < 5; i++) {
    boxes[i].innerHTML = `
    <div class="box-details" style="background-color:${allColors.colors[i]}">
    <p class="color-hex" id="code1">${allColors.colors[i]}</p>
      <span class="material-symbols-outlined">
      <button class="unlock-emoji"id="unlock1">🔓</button>
      <button class="lock-emoji hidden" id="lock1">🔐</button>
    </span>
  </div>`
  }
}



// function savePalette() {
//   savedPaletteSection.push(currentPalette) rightSection.innerHTML = `<div class="right-section">
//   <h2>Saved Palettes</h2>
//     <article class="savedBox" style="background-color:" id="savedBox1"></article></div>`
//     // for (var i = 0; i <savedPaletteSection.length; i++) {

//     }
// }


// function savePalette() {
//   savedPalettes.push(currentPalette) asideSection.innerHTML = ""
//   for (var i = 0; i < savedPalettes.length; i++) {
//   var colors = savedPalettes[i].colors var paletteId = savedPalettes[i].id   
//   createSection(colors, paletteId)
//   }




//    function lockColor() {
   
//     unlocked1.classList.add('hidden')
//     locked1.classList.remove('hidden');
//   };

// function unlockColor(event) {
//   unlocked1.classList.remove('hidden')
//   locked1.classList.add('hidden')
// }

