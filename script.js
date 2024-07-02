
// let tab = [1,2,5,8,9,12]
// function minmax(table){
// let max = table[0]
// let min = table[0]

// for(let i=0; i<table.length-1; i++){
    
//      (min>table[i+1])? max=max:max=table[i+1];
//      (min<table[i+1])? min=min:min=table[i+1];
     
// }
// console.log(max)
// console.log(min)
// }

// function minmax(tab){
//      console.log(Math.min(...tab))
//      console.log(Math.max(...tab))

//      console.log(tab)
//      console.log(...tab)
// }

// minmax(tab)

//Reverse A string
function reverseString(str){
    charray = str.split("")
    charray.reverse()
    reversed = charray.join("")
    return reversed
}
console.log(reverseString("hello"))
function countChar(str){
    charray = str.split("")
    return charray.length
}
console.log(countChar("hello"))

function capitalizeWords(str){
    charray = str.split(" ")
    
    for (var i in charray){
        charray[i]=charray[i].charAt(0).toUpperCase()+charray[i].slice(1)
    }
    return charray.join(" ")
}
console.log(capitalizeWords("hello world"))

// factorial
function factorial(n) {
    if (n < 0) return -1; 
    let result = 1;
    for (i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  function isPrime(num) {
    if (num <= 1) return false; 
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  // fibonacci
  function generateFibonacci(n) {
    if (n <= 0) return []; 
    if (n === 1) return [0]; 
    if (n === 2) return [0, 1]; 
    
    let fibSequence = [0, 1]; 
    
    for (let i = 2; i < n; i++) {
      let nextTerm = fibSequence[i - 1] + fibSequence[i - 2];
      fibSequence.push(nextTerm);
    }
    
    return fibSequence;
  }