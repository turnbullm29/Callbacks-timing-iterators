function greeting(name, callback) {
    let sentence = 'Hello, my name is ' + name;
    return sentence;
}
function anotherGreeting() {
    let sentence = 'I forgot my last name';
    return sentence;
}
let myName = 'malik'
console.log(greeting(myName, anotherGreeting));
//exercise
function printArrayAgain(array, callback) {
    for (let i = 0; i < array.length; i++){
        let number = array[i];
        console.log(number);
    }
    callback(array);
}
    function printArrayAgain(array) {
        for (let i = 0; i < array.length; i++) {
            let number = array[i];
            console.log(number);
        }
    }
    const numbersArray = [1,2,3,4,5,9,8,7,6];
//printArray(numbersArray, printArrayAgain);
//exercise
//function calculator(num1, num2, callbackOne, callbackTwo){
    //let result = callbackOne(num1, num2) + callbackTwo(num1, num2);
    //return SpeechRecognitionResultList;
//function subtractNumbers(num1, num2) {
//}
//}
//make a superHero function

//Take in two callbacks

//return a string in each callback describing the superpower

function greeting(name, callback){
    let sentence= 'I AM' + name;
    return sentence;
    
}
function anotherGreeting(){
    let sentence= 'Its pizza time';
    return sentence;
}



// solution
function spiderman(superpowerOne, superpowerTwo){
    let allSuperpowers = superpowerOne() + ' and ' +superpowerTwo();
    return allSuperpowers;
}
function webBlaster(){
    let power = 'Its pizza time!'
    return power;
}
function swingKick(){
    let kick= 'Its pizza time!';
    return kick;
}

console.log(spiderman(webBlaster, swingKick));

function blastoff() {
    let num = 0;
    for (let i = 10; i >= num; i--){
        console.log(i); //10, 9, 8, 7, 6....
    }
    console.log('Blast Off!!!!!')
}

setTimeout(blastoff, 5000);

function printName(){
    let num = 0;
    for (let i = 10; i>= num; i--){
        console.log(i);
    }
    console.log('MALIK!!')
}

setTimeout('MALIK!!' , 5000);

//solution
function printName(name){
    console.log(name);
}

let myNameTwo = 'Malik'
setTimeout(function(){
    printName(myNameTwo);
 }, 5000);