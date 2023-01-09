var currentPalette ;
var savedPalettes = [];

var color1 = new Color();
var color2 = new Color();
var color3 = new Color();
var color4 = new Color();
var color5 = new Color();
var allColors = new Palette(newRandomColor());

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var buttonNewPalette = document.getElementById('new');
var buttonSavePalette = document.getElementById('save');
var rightSection = document.querySelector('.right-section');
var savedPalettesContainer = document.querySelector('#savedBox1');
var boxes = document.querySelectorAll('.box');
var colorBoxContainer = document.querySelector('.color-boxes-container');
var codes = document.querySelectorAll('.color-hex');

window.addEventListener('load', updatePalette);
window.addEventListener('click', deleteSavedPalette);
buttonSavePalette.addEventListener('click', saveButtonClick);
buttonNewPalette.addEventListener('click', checkLock);
box1.addEventListener('click', lockToggle);
box2.addEventListener('click', lockToggle);
box3.addEventListener('click', lockToggle);
box4.addEventListener('click', lockToggle);
box5.addEventListener('click', lockToggle);

function updatePalette() {
  allColors = new Palette(newRandomColor()) ;
  setRandomColor();
}
function saveButtonClick() {
  savePalette()
  updatePalette()
  renderRightSection()
}
function savePalette() {
  savedPalettes.push(allColors)
}
function newRandomColor() {
  var color1 = new Color();
  var color2 = new Color();
  var color3 = new Color();
  var color4 = new Color();
  var color5 = new Color();
      color1.getRandomColor();
      color2.getRandomColor();
      color3.getRandomColor();
      color4.getRandomColor();
      color5.getRandomColor();
  var NewPaletteOnClick = [color1, color2, color3, color4, color5];
  return NewPaletteOnClick;
}
function setRandomColor() {
  for (let i = 0; i < 5; i++) {
    boxes[i].innerHTML = `
    <div class="box-details" id="box${i+1}" style="background-color:${allColors.colors[i].color}">
    <p class="color-hex" id="code${i}">${allColors.colors[i].color}</p>
    
      <button class="unlock-emoji"id="unlock${i+1}"><span class="material-icons md-light">
      lock_open</span></button>
      <button class="lock-emoji hidden" id="lock${i+1}"><span class="material-icons">
      lock</span></button>
    </span>
  </div>`
  }
}
function renderRightSection() {
  savedPalettesContainer.innerHTML = ''
  for(var i = 0; i < savedPalettes.length; i ++) {
    savedPalettesContainer.innerHTML += `<section class="mini-palette">
    <div class="mini-box-details" style="background-color:${savedPalettes[i].colors[0].color}"></div>   
    <div class="mini-box-details" style="background-color:${savedPalettes[i].colors[1].color}"></div>
    <div class="mini-box-details" style="background-color:${savedPalettes[i].colors[2].color}"></div>   
    <div class="mini-box-details" style="background-color:${savedPalettes[i].colors[3].color}"></div>
    <div class="mini-box-details" style="background-color:${savedPalettes[i].colors[4].color}"></div>
    <button class="trash-button" id="trash">
      <span class="material-icons">delete_forever</span>
      </button>
    </section>
    `
  }
}
function lockToggle (event) {
  console.log(event.target)
  for (var i = 1; i < 6; i++ ) {
    if (event.target.id === `box${i}`) {
      var lock = document.querySelector(`#lock${i}`)
      var unlock = document.querySelector(`#unlock${i}`)
    allColors.toggleLock(i-1)
    lock.classList.toggle('hidden')
    unlock.classList.toggle('hidden')
    }
  }
}
function checkLock(){
if(allColors.colors[0].locked === false) { 
  allColors.colors[0].getRandomColor()
}
if(allColors.colors[1].locked === false) { 
  allColors.colors[1].getRandomColor()
}
if(allColors.colors[2].locked === false) { 
  allColors.colors[2].getRandomColor()
}
if(allColors.colors[3].locked === false) { 
  allColors.colors[3].getRandomColor()
}
if(allColors.colors[4].locked === false) { 
  allColors.colors[4].getRandomColor()
}
setRandomColor()
updateLock()
}
function updateLock() {
  for(var i=0; i < allColors.colors.length; i++) {
    if(allColors.colors[i].locked) {
      var lock = document.querySelector(`#lock${i+1}`)
      var unlock = document.querySelector(`#unlock${i+1}`)
      unlock.classList.add('hidden')
      lock.classList.remove('hidden')
    }
  }
}
function deleteSavedPalette (event) {
   if(event.target.className === 'trash-button') {
    var paletteToDelete = event.target.parentElement;
    savedPalettesContainer.removeChild(paletteToDelete);
    savedPalettes.splice(savedPalettes.id);
  }
}