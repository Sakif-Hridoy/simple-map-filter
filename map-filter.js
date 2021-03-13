//simple for loop
const number = [3,4,5,6,7,8];
const output = [];
for(let i=0; i<number.length;i++){
    const element = number[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

// simple map
const number = [3,4,5,6,7,8];
number.map(function(element){
    console.log(element);
})

// simple map
const number = [3,4,5,6,7,8];
const result = number.map(function(element){
    return element * element;
})
console.log(result);

// map with arrow function
const number = [3,4,5,6,7,8];
const result = number.map(x => x * x);
console.log(result);

//filter 
const number = [3,4,5,6,7,8];
const result = number.filter(x => x > 4);
console.log(result);

//find
const number = [3,4,5,6,7,8];
const result = number.find(x => x > 4);
console.log(result);