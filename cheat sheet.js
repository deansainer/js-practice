//Include external JS file
<script src="filename.js"></script>


//Edit DOM element
document.getElementById("elementID").innerHTML = "Hello World!";


//Data Types
var age = 18;                           // number 
var name = "Jane";                      // string
var name = {first:"Jane", last:"Doe"};  // object
var truth = false;                      // boolean
var sheets = ["HTML","CSS","JS"];       // array
var a; typeof a;                        // undefined
var a = null;                           // value null

//Strings
var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line
var len = abc.length;           // string length
abc.indexOf("lmno");            // find substring, -1 if doesn't contain 
abc.lastIndexOf("lmno");        // last occurance
abc.slice(3, 6);                // cuts out "def", negative values count from behind
abc.replace("abc","123");       // find and replace, takes regular expressions
abc.toUpperCase();              // convert to upper case
abc.toLowerCase();              // convert to lower case
abc.concat(" ", str2);          // abc + " " + str2
abc.charAt(2);                  // character at index: "c"
abc[2];                         // unsafe, abc[2] = "C" doesn't work
abc.charCodeAt(2);              // character code at index: "c" -> 99
abc.split(",");                 // splitting a string on commas gives an array
abc.split("");                  // splitting on characters

//For loop
number = 0
for (i=0; i<10; i++){
    number+=1
}
console.log(number)

//Functions
function addNumbers(a, b) {
return a + b; ;
}
console.log(addNumbers(1, 2))


//Output
console.log(a);             // write to the browser console
document.write(a);          // write to the HTML
alert(a);                   // output in an alert box
confirm("Really?");         // yes/no dialog, returns true/false depending on user click
prompt("Your age?","0");    // input dialog. Second argument is the initial value


// Objects
var student = {                 // object name
    firstName:"Jane",           // list of properties and values
    lastName:"Doe",
    age:18,
    height:170,
    fullName : function() {     // object function
       return this.firstName + " " + this.lastName;
    }
    }; 
    student.age = 19           // setting value
    student[age]++             // incrementing
    name = student.fullName()  // call object function

//For Loop
for (var i = 0; i < 10; i++) {
document.write(i + ": " + i*3 + "<br />");
}