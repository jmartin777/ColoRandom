class Color {
    constructor() {
        this.locked = false;
        this.color = null
       
    }
     getRandomColor() {
        var letters = '0123456789ABCDEF';
        var hexColor = '#';
        for (var i = 0; i < 6; i++) {
          hexColor += letters[Math.floor(Math.random() * 16)];
        }
        this.color = hexColor;
        return hexColor
      }
  }
