class BubbleSort {
  constructor() {}
  sortNumbers(array) {
    for (let j = 0; j < array.length-1; j++) { //i-th always compare to i+1-th, last term has nothing to compare with 
      for (let i = 0; i < array.length-1-j; i++) { //after jth loop, the last j numbers must be in order, no need to compare them
        if (array[i] > array[i + 1]) {
          this.swap(array, i, i + 1);
        }
      }
    }
    console.log(array);
    return array;
  }

  swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

module.exports = BubbleSort;
