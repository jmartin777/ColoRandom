class Palette {
    constructor(colorPalette) {
    this.colors = colorPalette;
    this.id = Date.now();
    }
replaceUnlockedColors() {
    for (var i = 0; i < 5; i++) {
    if (colorPalette[i].locked === false) {
        colorPalette[i].getRandomColor();
        }
    } 
}
toggleLock(i){
    if(this.colors[i].locked === false) {
        this.colors[i].locked = true;
    } else {
        this.colors[i].locked = false;
        }
    }
}

 
 