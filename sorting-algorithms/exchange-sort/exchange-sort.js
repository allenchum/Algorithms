class ExchangeSort{
    constructor(){

    }
    sortNumbers(array){
        for(let i=0;i<array.length-1;i++){
            for(let j=i+1;j<array.length;j++){
                if(array[i]>array[j]){
                    this.swap(array,i,j)
                }
            }
        }
     return array;
    }

    swap(array,a,b){
       let temp = array[a];
       array[a] = array[b];
       array[b] = temp;
    }
}

module.exports = ExchangeSort;
