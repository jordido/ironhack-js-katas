describe('Working with Strings', function() {

  // Change the expresion after the comma to fullfill the expectation
  // The `assert.equals` expresion makes the test pass if and only if both
  // expresions are equal.
  // General form:
  // assert.equal(<expression>, <expressionExpectation>);

  it('create a string without using variable declaration', function() {
    assert.equal('Jhon Doe', 'Jhon Doe');
  });

  it('create a string using a variable declaration', function() {
    var name = 'Jhon Doe';

    assert.equal('Jhon Doe', name);
  });

  it('concatenate two strings using plus operator', function() {
    var name    = 'HAL';
    var version = '9000';
    var model = name + version;

    assert.equal('HAL9000', model);
  });

  it('concatenate two strings using plus operator', function() {
    var firstName = 'Jhon';
    var lastName  = 'Doe';
    var fullName = firstName + ' ' + lastName;

    assert.equal('Jhon Doe', fullName);
  });

  it('concatenate a string with a number', function() {
    var numberOfWeekDays = 7;
    var weekIntro        = 'A week have';
    var weekOutro        = 'days';

    var sentence = weekIntro + ' ' + numberOfWeekDays + ' ' + weekOutro;

    assert.equal('A week have 7 days', sentence);
  });

  it('calculate the number of characters of a string', function() {
    var name   = 'Jhon Doe';
    var length = name.length;

    assert.equal(8, length);
  })

  it('equality', function() {
    var string1 = 'Jhon Doe';
    var string2 = 'Jhon Doe';
    var equality = string1 == string2;

    assert.equal(equality, true);
  });

  it('equality with case sensitive', function() {
    var string1 = 'Jhon Doe';
    var string2 = 'jhon doe';
    var equality = string1.toUpperCase() == string2.toUpperCase()

    assert.equal(equality, true);
  });

  it('equality with type cohersion -null-', function() {
    var string1 = '';
    var string2 = null;
    var equality = string1 == string2;

    assert.equal(equality, false);
  });

  it('equality with type cohersion -undefined-', function() {
    var string1 = '';
    var string2 = undefined;
    var equality = string1 == string2;

    assert.equal(equality, false);
  });

  it('equality with type checking', function() {
    var string1 = '';
    var string2 = undefined;
    var equality = string1 === string2;

    assert.equal(equality, false);
  });

  it('transform a string into a number', function() {
    var number = parseInt('325');

    assert.strictEqual(325+'', number);
  });

  it('transform a tring in a array', function() {
    var model = 'HAL9000';
    var array = model.split('');

    assert.equal(['H','A','L','9','0','0','0'].toString(), array.toString());
  });
})
