// SUA

class DrawAnyShape {
    constructor(height) {
      this.height = height;
    }
  
    drawShape() {
      let res = "";
      //Paint above of diamond
      for (let i = 0; i <= this.height; i++) {
        for (let j = 0; j < this.height; j++) {
          if (j === this.height - i) {
            res += "*";
          } else {
            res += " ";
          }
        }
        for (let j = this.height; j >= 0; j--) {
          if (j === this.height - i) {
            res += "*";
          } else {
            res += " ";
          }
        }
        res += "\n";
      }
  
      //Paint under of diamond
      for (let i = 0; i <= this.height; i++) {
        for (let j = this.height; j > 0; j--) {
          if (j === this.height - i - 1) {
            res += "*";
          } else {
            res += " ";
          }
        }
        for (let j = 0; j < this.height; j++) {
          if (j === this.height - i - 1) {
            res += "*";
          } else {
            res += " ";
          }
        }
        res += "\n";
      }
      return res;
    }
  }

  // Sua
  
  const resultTest2 = new DrawAnyShape(6);
  console.log("resultTest2");
  console.log(resultTest2.drawShape());