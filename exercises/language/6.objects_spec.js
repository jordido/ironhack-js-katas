describe('Working with Objects', function() {

  it('creating an object', function() {
    // Create a object literal

    var obj = new Object();

    assert.deepEqual({}, obj);
  })

  it('constructor', function() {
    // Create an object called person using a contructor named Person

    var person = new Person;

    function Person(person){
    }

    assert.instanceOf(person, Person);
  })

  it('constructor with params', function() {
    // Create a constructor named Person that recives the <firstName> and the
    // <lastName> as parameters and create a new object called person using it

    function Person(a,b){
      this.firstName = a;
      this.lastName = b;
    }

    var person = new Person("John","Doe");

    assert.instanceOf(person, Person);
    assert.equal(Person.length, 2);
    assert.property(person, 'firstName');
    assert.property(person, 'lastName');
    assert.equal(person.firstName, 'John');
    assert.equal(person.lastName, 'Doe');
  })

  it('constructor with only one param', function() {
    // Create a constructor named Person that recives the <firstName> and the
    // <lastName> as one parameter and create a new object called person using it

    function Person(person) {
      this.firstName = person.firstName;
      this.lastName = person.lastName;
    };

    var person = new Person({firstName: 'Jhon', lastName: 'Doe'});

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

    function Person(person) {
      this.firstName = person.firstName;
      this.lastName = person.lastName;
    };

    Person.prototype.fullName = function() {
      return this.firstName + ' ' + this.lastName;
    };

    var person = new Person({firstName: 'Jhon', lastName: 'Doe'});

    assert.equal(person.fullName(), 'Jhon Doe');
  })
})
