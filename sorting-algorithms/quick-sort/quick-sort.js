class QuickSort {
  constructor() {}
  sortNumbers(array){
    return this.quicksort(array,0,array.length-1);
  }
  quicksort(array,start,end){
    if(start<end){
    let parIndex = this.partition(array,start,end);
    this.quicksort(array,start,parIndex-1); //Left hand side
    this.quicksort(array,parIndex,end);  //Right hand side
    }
    return array;
  }
  partition(array,start,end){
      let pivat = array[end];
      let parIndex = start;
      for(let i=parIndex;i<end;i++){
          if(pivat>=array[i]){
              this.swap(array,parIndex,i);
              parIndex ++;
          }
      }
      this.swap(array,parIndex,end);
      return parIndex;
  }
  swap(array,i,j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

}

module.exports = QuickSort;