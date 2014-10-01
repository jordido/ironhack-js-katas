describe('Working with Arrays', function() {

  // Change the expresion after the comma to fullfill the expectation
  // The `assert.equals` expresion makes the test pass if and only if both
  // expresions are equal.
  // General form:
  // assert.equal(<expression>, <expressionExpectation>);

  it('create an array without the new operator', function() {
    var array = [];

    assert.isArray(array);
  })

  it('calculates the numbers of item in an array', function() {
    var fruits = ['orange', 'apple', 'banana', 'pineapple'];
    var length = fruits.length;

    assert.equal(4, length)
  })

  it('adds an element to the begining of the array', function() {
    var fruits = ['apple', 'banana', 'pineapple'];
    var orange = 'orange';
    fruits.unshift(orange);

    assert.deepEqual(['orange', 'apple', 'banana', 'pineapple'], fruits)
  })

  it('adds an element to the end of the array', function() {
    var fruits    = ['orange', 'apple', 'banana'];
    var pineapple = 'pineapple';
    fruits.push(pineapple);

    assert.deepEqual(['orange', 'apple', 'banana', 'pineapple'], fruits)
  })

  it('remove an element at the begining of the array', function() {
    var fruits    = ['orange', 'apple', 'banana', 'pineapple'];
    fruits.shift();

    assert.deepEqual(['apple', 'banana', 'pineapple'], fruits)
  })

  it('remove an element at the end of the array', function() {
    var fruits = ['orange', 'apple', 'banana', 'pineapple'];
    fruits.pop();

    assert.deepEqual(['orange', 'apple', 'banana'], fruits)
  })

  it('equality', function() {
    var fruits1 = ['orange', 'apple', 'banana', 'pineapple'];
    var fruits2 = ['orange', 'apple', 'banana', 'pineapple'];
    var equality = fruits1.toString() == fruits2.toString();

    assert.equal(equality, true)
  })

  it('equality with type checking', function() {
    var fruits1 = ['orange', 'apple', 'banana', 'pineapple'];
    var fruits2 = ['orange', 'apple', 'banana', 'pineapple'];
    var equality = fruits1.toString() === fruits2.toString();

    assert.equal(equality, true)
  })

  it('creates a string from an array', function() {
    var fruits = ['orange', 'apple', 'banana', 'pineapple'];
    var string = fruits.join(', ');

    assert.equal('orange, apple, banana, pineapple', string)
  })
})
