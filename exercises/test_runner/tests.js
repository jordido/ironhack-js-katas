describe('Working with Numbers', function() {

  // Change the expresion after the comma to fullfill the expectation
  // The `assert.equals` expresion makes the test pass if and only if both
  // expresions are equal.
  // General form:
  // assert.equal(<expression>, <expressionExpectation>);

  it('sum', function() {
    assert.equal(3 + 4, 7);
  })

  it('difference', function() {
    assert.equal(4 - 2, 2);
  })

  it('multiplaction', function() {
    assert.equal(3 * 2, 6);
  })

  it('division', function() {
    assert.equal(6 / 2, 3);
  })

  it('modulus', function() {
    assert.equal(10 % 3, 1);
  })

  it('equality', function() {
    var number1  = 5;
    var number2  = 5;
    var equality = number1 == number2;

    assert.equal(equality, true);
  })

  it('equality with type cohersion', function() {
    var number   = 5;
    var string   = '5';
    var equality = number == string;

    assert.equal(equality, true);
  })

  it('equality with type cohersion -null-', function() {
    var number1  = null;
    var number2  = null;
    var equality = number1 == number2;

    assert.equal(equality, true);
  })

  it('equality with type cohersion -undefined-', function() {
    var number1  = undefined;
    var number2  = undefined;
    var equality = number1 == number2;

    assert.equal(equality, true);
  })

  it('equality with type checking', function() {
    var number   = 5;
    var string   = '5';
    var equality = number === string;

    assert.equal(equality, false);
  })

  it('using variables to do operations', function() {
    // Calculate the <totalNumberOfDays> that are contained in the
    // <numberOfWeeks>
    var numberOfWeeks      = 5;
    var numberOfDaysInWeek = 7;
    var totalNumberOfDays = numberOfWeeks * numberOfDaysInWeek;


    assert.equal(35, totalNumberOfDays);
  })

  it('transforming a number to string', function() {
    // Note: don't use parseInt
    assert.strictEqual('5', 5+'');
  })

})

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
    var model = name+version;

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
  })

  it('calculate the number of characters of a string', function() {
    var name   = 'Jhon Doe';
    var length = name.length;

    assert.equal(8, length);
  })

  it('equality', function() {
    var string1 = 'Jhon Doe';
    var string2 = 'Jhon Doe';
    var equality = string1 == string2

    assert.equal(equality, true);
  })

  it('equality with case sensitive', function() {
    var string1 = 'Jhon Doe';
    var string2 = 'jhon doe';
    var equality = string1.toUpperCase() == string2.toUpperCase()

    assert.equal(equality, true);
  })

  it('equality with type cohersion -null-', function() {
    var string1 = '';
    var string2 = null;
    var equality = string1 == string2

    assert.equal(equality, false);
  })

  it('equality with type cohersion -undefined-', function() {
    var string1 = '';
    var string2 = undefined;
    var equality = string1 == string2

    assert.equal(equality, false);
  })

  it('equality with type checking', function() {
    var string1 = '';
    var string2 = undefined;
    var equality = string1 === string2

    assert.equal(equality, false);
  })

  it('transform a string into a number', function() {
    var number = '325';

    assert.strictEqual(325+'', number);
  });

  it('transform a tring in a array', function() {
    var model = 'HAL9000';
    var array = model.split('');
    assert.equal(['H','A','L','9','0','0','0'].toString(),array.toString());
  });
})

describe('Working with Arrays', function() {

  // Change the expresion after the comma to fullfill the expectation
  // The `assert.equals` expresion makes the test pass if and only if both
  // expresions are equal.
  // General form:
  // assert.equal(<expression>, <expressionExpectation>);

  it('create an array without the new operator', function() {
    var array =[];

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
    var fruits1 = ['orange', 'apple', 'banana', 'pineapple'].toString();
    var fruits2 = ['orange', 'apple', 'banana', 'pineapple'].toString();
    var equality = fruits1 == fruits2;

    assert.equal(equality, true)
  })

  it('equality with type checking', function() {
    var fruits1 = ['orange', 'apple', 'banana', 'pineapple'].toString();
    var fruits2 = ['orange', 'apple', 'banana', 'pineapple'].toString();
    var equality = fruits1 === fruits2;

    assert.equal(equality, true)
  })

  it('creates a string from an array', function() {
    var fruits = ['orange', 'apple', 'banana', 'pineapple'];
    var string = fruits.join(', ');

    assert.equal('orange, apple, banana, pineapple', string)
  })
})

describe('Working with Functions', function() {

  // Make a function that fullfills the description

  it('returning a number', function() {
    // Create a function called sum that recives 4 arguments and return the
    // sum of all of them

    assert.equal(sum.length, 4);
    assert.equal(sum(1,2,3,4), 10);
  })

  it('returning a string', function() {
    // Create a function called shout that appends two exclamation marks at the end

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

describe('Working with Arrays and Functions', function() {

  it('using map', function() {
    // Use map to sum two to each element
    var numbers = [1, 2, 3, 4];

    assert.deepEqual([3, 4, 5, 6], numbers);
  })

  it('using reduce', function() {
    // Use reduce to sum all numbers in the array
    // Note: you can use reduceRight if you want
    var numbers = [1, 2, 3, 4];
    var result;

    assert.equal(10, result);
  })

  it('using filter', function() {
    // Use filter to find the odd numbers in an array
    var numbers = [1, 2, 3, 4];
    var odds;

    assert.deepEqual([2, 4], odds);
  })

  it('using every', function() {
    // Use every to find if all numbers are even
    var numbers = [1, 3, 5, 7];
    var areEvens;

    assert.equal(areEvens, true);
  })

  it('using some', function() {
    // Use some to find if there is a odd number in the list
    var numbers = [1, 3, 5, 6];
    var haveOdds;

    assert.equal(haveOdds, true);
  })
})

describe('Working with Objects', function() {

  it('creating an object', function() {
    // Create a object literal

    assert.deepEqual({}, obj);
  })

  it('constructor', function() {
    // Create an object called person using a contructor named Person

    assert.instanceOf(person, Person);
  })

  it('constructor with params', function() {
    // Create a constructor named Person that recives the <firstName> and the
    // <lastName> as parameters and create a new object called person using it

    assert.instanceOf(person, Person);
    assert.equal(Person.length, 2);
    assert.property(person, 'firstName');
    assert.property(person, 'lastName');
    assert.equal(person.firstName, 'Jhon');
    assert.equal(person.lastName, 'Doe');
  })

  it('constructor with only one param', function() {
    // Create a constructor named Person that recives the <firstName> and the
    // <lastName> as one parameter and create a new object called person using it

    assert.instanceOf(person, Person);
    assert.equal(Person.length, 1);
    assert.property(person, 'firstName');
    assert.property(person, 'lastName');
    assert.equal(person.firstName, 'Jhon');
    assert.equal(person.lastName, 'Doe');
  })

  it('constructor with shared method', function() {
    // Create a constructor named Person that recives the <firstName> and the
    // <lastName> as one parameter, with a method that calculates the fullName
    // of it, and create a new object called person using it

    assert.equal(person.fullName(), 'Jhon Doe');
  })
})

describe('Working with Contexts', function() {

  it('change the context of a function call', function() {
    // Write a function "fullName" that concatenates the <firstName> and
    // <lastName> then executed in the context of "person"
    var personFullName;
    var person = {
      firstName: 'Jhon',
      lastName: 'Doe'
    }

    assert.equal(personFullName, 'Jhon Doe')
  })

  it('change the context of a function call -call-', function() {
    // Write a function "accelerate" that takes the Km/h and the time in seconds
    // and returns '<modelName>' accelerates to <Km/h> in <seconds> seconds
    var acceleration;
    var mazda = {
      model: 'mazda 3'
    };

    assert.equal(acceleration, 'mazda 3 accelerates to 150 in 30 seconds');
  })

  it('change the context of a function call -apply-', function() {
    // Write a function "accelerate" that takes the Km/h and the time in seconds
    // and returns '<modelName>' accelerates to <Km/h> in <seconds> seconds
    var acceleration;
    var mazda = {
      model: 'mazda 3'
    };

    assert.equal(acceleration, 'mazda 3 accelerates to 150 in 30 seconds');
  })

  it('change the context of a function call -bind-', function() {
    // Write a function "accelerate" that takes the Km/h and the time in seconds
    // and returns '<modelName>' accelerates to <Km/h> in <seconds> seconds
    var acceleration;
    var mazda = {
      model: 'mazda 3'
    };

    assert.equal(acceleration, 'mazda 3 accelerates to 150 in 30 seconds');
  })
})
