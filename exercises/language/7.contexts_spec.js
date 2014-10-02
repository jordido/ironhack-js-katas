describe('Working with Contexts', function() {

  it('change the context of a function call', function() {
    // Write a function "fullName" that concatenates the <firstName> and
    // <lastName> then executed in the context of "person"
    var personFullName;
    var person = {
      firstName: 'Jhon',
      lastName: 'Doe'
    }

    var fullName = function() {
      return this.firstName + ' ' + this.lastName; 
    }
    personFullName = fullName.call(person)
    assert.equal(personFullName, 'Jhon Doe')
  })

  it('change the context of a function call -call-', function() {
    // Write a function "accelerate" that takes the Km/h and the time in seconds
    // and returns '<modelName>' accelerates to <Km/h> in <seconds> seconds
    var acceleration;
    var mazda = {
      model: 'mazda 3'
    };
    var accelerate = function (kmh, seconds) {
      return this.model + ' accelerates to ' + kmh + ' in ' + seconds + ' seconds';
    }

    acceleration = accelerate.call (mazda, 150, 30);

    assert.equal(acceleration, 'mazda 3 accelerates to 150 in 30 seconds');
  })

  it('change the context of a function call -apply-', function() {
    // Write a function "accelerate" that takes the Km/h and the time in seconds
    // and returns '<modelName>' accelerates to <Km/h> in <seconds> seconds
    var acceleration;
    var mazda = {
      model: 'mazda 3'
    };

    var accelerate = function (kmh, seconds) {
      return this.model + ' accelerates to ' + kmh + ' in ' + seconds + ' seconds';
    }

    acceleration = accelerate.apply (mazda, [150, 30]);

    assert.equal(acceleration, 'mazda 3 accelerates to 150 in 30 seconds');
  })

  it('change the context of a function call -bind-', function() {
    // Write a function "accelerate" that takes the Km/h and the time in seconds
    // and returns '<modelName>' accelerates to <Km/h> in <seconds> seconds
    var acceleration;
    var mazda = {
      model: 'mazda 3'
    };

    var accelerate = function (kmh, seconds) {
      return this.model + ' accelerates to ' + kmh + ' in ' + seconds + ' seconds';
    }.bind(mazda)

    acceleration = accelerate(150, 30);

    acceleration = accelerate.call (mazda, 150, 30);
    assert.equal(acceleration, 'mazda 3 accelerates to 150 in 30 seconds');
  })
})
