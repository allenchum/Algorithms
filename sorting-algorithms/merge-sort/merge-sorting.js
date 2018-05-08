class MergeSort {
  constructor() {}
  sortNumbers(array) {
    if (array.length < 2) {
      return array;
    } else {
      let length = array.length;
      let middle = Math.floor(length / 2);
      let L = array.slice(0, middle);
      let R = array.slice(middle, length);
      return this.mergeLR(this.sortNumbers(L), this.sortNumbers(R));
    }
  }

  mergeLR(L, R) {
    let nL = L.length;
    let nR = R.length;
    let length = nL + nR;
    let result = [];
    for (let i = 0, j = 0, k = 0; k < length; k++){
      if (i >= nL && j < nR) {
        result.push(R[j]);
        j++;
      } else if (i < nL && j >= nR) {
        result.push(L[i]);
        i++;
      } else if (L[i] <= R[j]) {
        result.push(L[i]);
        i++;
      } else if (L[i] > R[j]) {
        result.push(R[j]);
        j++;
      }
    }
    return result;
  }
}

module.exports = MergeSort;
