describe('Working with Arrays and Functions', function() {

  it('using map', function() {
    // Use map to sum two to each element
    var numbers = [1, 2, 3, 4];
  
    var plus = numbers.map(function(num){
    return num + 2;
  });

    assert.deepEqual([3, 4, 5, 6], plus);
  })

  it('using reduce', function() {
    // Use reduce to sum all numbers in the array
    // Note: you can use reduceRight if you want
    var numbers = [1, 2, 3, 4];
    var result = numbers.reduce(function(a,b){
      return a+b;
    });
    return result;

    assert.equal(10, result);
  })

  it('using filter', function() {
    // Use filter to find the even numbers in an array
    var numbers = [1, 2, 3, 4];
    var even = numbers.filter(function(num){
        return num % 2 == 0;
    })

    assert.deepEqual([2, 4], even);
  })

  it('using every', function() {
    // Use every to find if all numbers are even
    var numbers = [1, 3, 5, 7];
    var areEvens = numbers.every(function(num){
      return num % 2 == 1;
    })

    assert.equal(areEvens, true);
  })

  it('using some', function() {
    // Use some to find if there is a odd number in the list
    var numbers = [1, 3, 5, 6];
    var haveOdds = numbers.some(function(num){
      return num % 2 == 1;
    })

    assert.equal(haveOdds, true);
  })
})
