var InsertionSort = require("./insertion-sort.js");

describe('Insertion Sorting on ', function(){
    const insertionsort = new InsertionSort();
    it('2 digits.',function(){
       let arr = [4,5];
       expect(insertionsort.sortNumbers([5,4])).toEqual(arr);
    });
    it('3 digits.', function(){
        let arr = [1,2,3];
        expect(insertionsort.sortNumbers([3,1,2])).toEqual(arr);
    });
    it('4 digits.', function(){
        let arr = [4,5,8,9];
        expect(insertionsort.sortNumbers([9,8,5,4])).toEqual(arr);
    });
    it('5 digits.',function(){
        let arr = [1,2,4,5,8];
        expect(insertionsort.sortNumbers([5,1,4,2,8])).toEqual(arr);
    })
})