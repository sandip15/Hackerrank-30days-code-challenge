/* 
Write a Person class with an instance variable,age , and a constructor that takes an integer,initial age , as a parameter. 
The constructor must assign initial age to age after confirming the argument passed as initial age is not negative; if a 
negative argument is passed as initial age, the constructor should set age to  and print Age is not valid, setting age to 0.. 
In addition, you must write the following instance methods:

yearPasses() should increase the  instance variable by .
amIOld() should perform the following conditional actions:
If , print You are young..
If  and , print You are a teenager..
Otherwise, print You are old..
*/

//-----------------------solution ------------------

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";  // creating empty string 
var input_stdin_array = "";  // empty string 
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function Person(initialAge){
    // Add some more code to run some checks on initialAge
    if (initialAge >= 0) {
        this.initialAge = initialAge;
    } else {
        this.initialAge = 0;
        console.log("Age is not valid, setting age to 0.");
    }

  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
      if (this.initialAge < 13) {
       console.log("You are young.")
      }
      else if (this.initialAge >= 13 && this.initialAge < 18) {
       console.log("You are a teenager.")
      } else {
       console.log("You are old.")
   }

  };
    this.yearPasses = function () {
          // Increment the age of the person in here
        this.initialAge++;
   };
}

function main() {

var T=parseInt(readLine());
for(i=0;i<T;i++){
    var age=parseInt(readLine());
    var p=new Person(age);
    p.amIOld();
    for(j=0;j<3;j++){
        p.yearPasses();
        
    }
    p.amIOld();
    console.log("");   
    }
}
