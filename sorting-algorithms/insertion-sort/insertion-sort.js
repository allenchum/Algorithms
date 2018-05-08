class InsertionSort{
    constructor(){

    }
    sortNumbers(arr){
        for(var i=0;i<arr.length;i++){
             let value = arr[i]    //store the current item value so it can be place right
            for(var j= i-1; j>=0 && arr[j]>value;j--){ //start at the digit on the left of value, if digit greater than value, shift to right. Stop when j<0 
                //loop through the items in the sorted array (the items from the current to the beginning)
                //copy each item to the next one if they're greater than value
                arr[j+1] = arr[j]
            }
            arr[j+1] = value; //the last item we have reach, now hold the value
        }
        return arr;
    }

}

module.exports = InsertionSort;