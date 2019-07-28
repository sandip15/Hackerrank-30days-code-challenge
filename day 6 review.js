/*
Given a string,S , of length N that is indexed from 0 to N-1, print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line (see the Sample below for more detail).

Input Format

The first line contains an integer,T (the number of test cases). 
Each line i of the T  subsequent lines contain a String, S .
Sample Input:
2
Hacker
Rank

Sample Output:
Hce akr
Rn ak
*/

//----------------------------solution ---------------------

function processData(input) {
    //Enter your code here
    let arr = input.split('\n')
    let even = ''; // creating empty string
    let odd = '';

    for (let i = 1; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if (j % 2 === 0) {
                even +=arr[i][j]
            } else if (j % 2 !== 0) {
                odd +=arr[i][j]
            }
        }
        console.log(even + " " + odd);
        even = '';
        odd = '';
         
    } 
}
    
 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
