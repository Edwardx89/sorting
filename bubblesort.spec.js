describe('Bubble Sort', function(){
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function (){
    expect( bubbleSort([]) ).toEqual( [] );
    expect(window.swap.calls.count()).toEqual(0);
  });
   it('handles an array of 1', function (){
    expect( bubbleSort([1])).toEqual([1])
    expect(window.swap.calls.count()).toEqual(0);
  });
  it('handles an array of elements', function (){
    expect( bubbleSort([1,9,5,6,3])).toEqual( [1,3,5,6,9])
    expect(window.swap.calls.count()).toEqual(5);
  })
  it('handles an array of elements in order', function (){
    expect( bubbleSort([1,2,3,4,5])).toEqual( [1,2,3,4,5])
    expect(window.swap.calls.count()).toEqual(0);
  })
  it('handles an array of elements', function (){
    expect( bubbleSort([9,6,5,3,1])).toEqual( [1,3,5,6,9])
    expect(window.swap.calls.count()).toEqual(10);
  })
  it('handles an array of negative numbers in elements', function (){
    expect( bubbleSort([9,-6,5,-3,1])).toEqual( [-6,-3,1,5,9])
    expect(window.swap.calls.count()).toEqual(6);
  })
});

