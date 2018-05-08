var ExchangeSort = require("./exchange-sort.js");

describe('Exchange Sorting on ', function(){
    const exchangesort = new ExchangeSort();
    it('2 digits.',function(){
       let arr = [4,5];
       expect(exchangesort.sortNumbers([5,4])).toEqual(arr);
    });
    it('3 digits.', function(){
        let arr = [1,2,3];
        expect(exchangesort.sortNumbers([3,1,2])).toEqual(arr);
    });
    it('4 digits.', function(){
        let arr = [4,5,8,9];
        expect(exchangesort.sortNumbers([9,8,5,4])).toEqual(arr);
    });
    it('5 digits.',function(){
        let arr = [1,2,4,5,8];
        expect(exchangesort.sortNumbers([5,1,4,2,8])).toEqual(arr);
    })
})