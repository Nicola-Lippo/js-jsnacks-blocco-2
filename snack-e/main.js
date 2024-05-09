'use strict'
//array A 
const input = [1, 2, 3, 4, 5, 6];
console.log(input)
console.log(`${rimuoviDallaTesta(input)}`);
//scrivere una funzione rimuoviDallaTesta()
function rimuoviDallaTesta(input) {
    //array B
    let result = [];
    let inputLength = input.length;
    for (let i = 1; i < inputLength; i++) {
        result[i-1] = input[i]
    }  
    return result;
}

