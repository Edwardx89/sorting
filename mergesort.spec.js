describe('Merge Sort', function(){
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function (){
    expect( mergeSort([]) ).toEqual( [] );
  });
  it('handles an array of 1', function (){
    expect( mergeSort([1])).toEqual([1])
  });
  it('handles an array of odd elements', function (){
    expect( mergeSort([1,9,5,6,3])).toEqual( [1,3,5,6,9])
  })
  it('handles an array of elements in order', function (){
    expect( mergeSort([1,2,3,4,5])).toEqual( [1,2,3,4,5])
  })
  it('handles an array of elements', function (){
    expect( mergeSort([9,6,5,3,1,0])).toEqual( [0,1,3,5,6,9])
  })
  it('handles an array of negative numbers in elements', function (){
    expect( mergeSort([9,-6,5,-3,1,2])).toEqual( [-6,-3,1,2,5,9])
  })
});

describe ('split', function(){
  it('split the array into two', function(){
    expect(split([4,6,1,8,5,2])).toEqual([[4,6,1],[8,5,2]])
  });
  it('split an even array into two', function(){
    expect(split([9,3,7,1,8])).toEqual([[9,3],[7,1,8]])
  })
})

describe ('merge A Sorted Array', function(){
  it('merge two sorted arrays into one', function(){
    expect(mergeASortedArray([1,2,3],[4,5,6])).toEqual([1,2,3,4,5,6]);
  });
  it('merge sorted array of uneven length', function(){
    expect(mergeASortedArray([2,4,7],[3,5,8,9])).toEqual([2,3,4,5,7,8,9])
  })
})

