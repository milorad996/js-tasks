const pi = 3.14;

//pi = 2;
//console.log(pi) 

let number1 = 1;

number1 = 2;
console.log(number1)

var number2 = 2;

number2 = 3;
console.log(number2)


class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }

  var animal = new Animal("dog");
  console.log(animal.speak())

 function doSomething(){
    console.log("Do something")
 }

 console.log(doSomething());

 let arrowF = () =>  2 + 2 ;
 console.log(arrowF())

 function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();

  const promise1 = new Promise((resolve, reject) => {
    resolve('Success!');
  });
  
  promise1.then((value) => {
    console.log(value);
    // expected output: "Success!"
  });