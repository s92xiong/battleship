function Ship(length) {
  return {
    length: length,
    array: new Array(length),
    lifePoints: length,
    sunk: false,
    isOrientationVert: true,
    hit(position) {
      this.array[position] = true;
    },
    isSunk() {
      let sum = 0;
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] === true) {
          sum++
        }
      }
      if (sum === this.array.length) {
        this.sunk = true;
      }
    },
  }
}

Ship();

export default Ship;