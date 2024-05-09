'use strict'
//array A 
const input = [1, 2, 3, 4, 5, 6];
console.log(`${rimuoviDallaCoda(input)}`);
//scrivere una funzione rimuoviDallaCoda()
function rimuoviDallaCoda(input) {
    //array B
    let result = [];
    let inputLength = input.length -1;
    for (let i = 0; i <= inputLength; i++) {
        result[i] = input[i]
    }  
    return result;
}

