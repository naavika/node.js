const multiply = (num1, num2) => num1 * num2;
console.log(multiply(5, 10)); 


const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log(' Hi, I am ' + this.name);
    }
};

person.greet();




const array = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

const transformedArray = array.map(item => {
    if (item.trim() === '') {
        return 'empty string';
    } else {
        return item;
    }
});

console.log(transformedArray);




    
const hobbies = ['reading', 'painting', 'cooking'];
hobbies.push('gardening'); 
console.log(hobbies);




const originalArray = [1, 2, 3];
const newArray = [...originalArray];

console.log(newArray); 




function myFunction(...restParameter) {
    console.log(restParameter);
  }
  
  myFunction(1, 2, 3, 4, 5); 
  



// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);  
console.log(second); 
console.log(rest);   

// Object destructuring
const object = { name: 'Alice', age: 30 };
const { name, age } = object;
console.log(name); 
console.log(age); 



const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const printSequence = async () => {
  console.log('a');
  console.log('b');
  await delay(3000);
  console.log('c');
  console.log('d');
  console.log('e');
};

printSequence();

