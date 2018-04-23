// argument object no longer bound with arrow functions

const add =  (a, b) => {
   // console.log(arguments); with arrow will be not defined
    return a + b;
}

console.log(add(55, 1, 10));
 
//this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlaces() {

       /*  this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        }); */
      
       return this.cities.map((city) =>  this.name + ' has lived in ' + city);  
    }

};

console.log(user.printPlaces());

// Challenge area

const multiplier = {
    numbers: [10,20,30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number );
    }
}

console.log(multiplier.multiply());