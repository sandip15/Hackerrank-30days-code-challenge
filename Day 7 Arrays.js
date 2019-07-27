/*
Given an array,A,N of integers, print A's elements in reverse order as a single line of space-separated numbers.

Input Format: 
The first line contains an integer, N  (the size of our array). 
The second line contains N space-separated integers describing array A's elements.

Output Format:
Print the elements of array  in reverse order as a single line of space-separated numbers.

sample input:
4
1 4 3 2

Sample Output

2 3 4 1

*/

//----——-------------------solution--------------------------
'use strict'; // avoid using global variables

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = ''; // empty string
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
}
