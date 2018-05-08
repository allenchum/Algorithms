var BubbleSort = require("./bubble-sort.js");

describe('Bubble Sorting on ', function(){
    const bubblesort = new BubbleSort();
    it('2 digits.',function(){
       let arr = [4,5];
       expect(bubblesort.sortNumbers([5,4])).toEqual(arr);
    });
    it('3 digits.', function(){
        let arr = [1,2,3];
        expect(bubblesort.sortNumbers([3,1,2])).toEqual(arr);
    });
    it('4 digits.', function(){
        let arr = [4,5,8,9];
        expect(bubblesort.sortNumbers([9,8,5,4])).toEqual(arr);
    });
    it('5 digits.',function(){
        let arr = [1,2,4,5,8];
        expect(bubblesort.sortNumbers([5,1,4,2,8])).toEqual(arr);
    })
})