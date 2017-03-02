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
