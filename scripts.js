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
var savedPalettesContainer = document.querySelector('#savedBox1')
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
buttonSavePalette.addEventListener('click', saveButtonClick)
buttonNewPalette.addEventListener('click', updatePalette);

function updatePalette() {
  allColors = new Palette(newRandomColor()) ;
  setRandomColor();

}

function saveButtonClick() {
  savePalette()
  updatePalette()
  renderRightSection()
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



function savePalette() {
  savedPalettes.push(allColors)
}

function renderRightSection() {
  savedPalettesContainer.innerHTML = ''
  for(var i = 0; i < savedPalettes.length; i ++) {
    savedPalettesContainer.innerHTML += `<section class="mini-palette">
    <div class="mini-box-details" style="background-color:${savedPalettes[i].colors[0]}"></div>   
    <div class="mini-box-details" style="background-color:${savedPalettes[i].colors[1]}"></div>
    <div class="mini-box-details" style="background-color:${savedPalettes[i].colors[2]}"></div>   
    <div class="mini-box-details" style="background-color:${savedPalettes[i].colors[3]}"></div>
    <div class="mini-box-details" style="background-color:${savedPalettes[i].colors[4]}"></div>
  </section>
 `

  }

}




//    function lockColor() {
   
//     unlocked1.classList.add('hidden')
//     locked1.classList.remove('hidden');
//   };

// function unlockColor(event) {
//   unlocked1.classList.remove('hidden')
//   locked1.classList.add('hidden')
// }

