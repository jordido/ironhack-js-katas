describe('Working with Functions', function() {

  // Make a function that fullfills the description

  it('returning a number', function() {
    // Create a function called sum that recives 4 arguments and return the
    // sum of all of them
    var sum = function(arg1, arg2, arg3, arg4) {
      return arg1 + arg2 + arg3 + arg4;
    }

    assert.equal(sum.length, 4);
    assert.equal(sum(1,2,3,4), 10);
  })

  it('returning a string', function() {
    // Create a function called shout that appends two exclamation marks at the end
    var shout = function(arg) {
      return arg + "!!";
    }
    assert.equal(shout.length, 1);
    assert.equal(shout('Hohoho'), 'Hohoho!!');
  })

  it('returning a function', function() {
    // Create a function called sum that acepts only one parameter and return
    // another function that as well takes only one parameter and sums both
    // numbers
    // Example of usage:
    // var sum = sum(3);
    // var result = sum(5);
    //  -> result should be 8
    // Note: This is what makes "currying" a function posible
    var result;

    assert.equal(sum.length, 1);
    sum = sum(3);
    assert.isFunction(sum);
    assert.equal(sum.length, 1);
    result = sum(5);
    assert.equal(result, 8);
  })

  it('passing a function as a parameter', function() {
    // Create a function that recieves the fullName of a person and a function
    // and executes the function with the fullName of the person.
    // Example of usage:
    // speak('Jhon Doe', yellAtHim) -> 'Jhon Doe!!!'
    // speak('Jhon Doe', salutation) -> 'Hi Jhon Doe!'
    // Note: This is the basic construction for all "callbacks"

    var yellAtHim = function(fullName) {
      return fullName+'!!!';
    };

    var salutation = function(fullName) {
      return 'Hi ' + fullName + '!';
    }

    assert.equal(speak.length, 2);
    assert.equal(speak('Jhon Doe', yellAtHim), 'Jhon Doe!!!');
    assert.equal(speak('Jhon Doe', salutation), 'Hi Jhon Doe!');
  })

  it('variable declaration inside functions', function() {
    // Modify the function to make the test pass
    // Note: This behavior can be hard to diggest at first; this behavior is
    //       known as "variable hoisting"

    var fnWithVariable = function() {
      nonExistedVar;
      var nonExistedVar = 7;
    }

    assert.throw(fnWithVariable, ReferenceError);
  })

  it('scope in functions', function() {
    // Modify the assertion to make the test pass

    var context = function() {
      return this;
    }

    assert.deepEqual(context(), context);
  })
})
