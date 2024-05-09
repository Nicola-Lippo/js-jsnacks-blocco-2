'use strict'

let input = [1, 2, 3, 4, 5, 6];
console.log(`il risultato è ${stampa(input)}`);
function stampa(input) {
    const inputLength = input.length;
    for (let i = 1; i < inputLength; i++) {
        console.log(input[i]);
        result += input[i];
        if (i < inputLength - 1) {
            result += ',';
        }
    }   
    return '';
}

