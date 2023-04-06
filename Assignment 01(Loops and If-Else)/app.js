/*-------- Program No 01: Accept two number in prompt and display larger one in console -------------*/

// var num1 = +prompt("Enter 1st Number");
// var num2 = +prompt("Enter 2nd Number");

// if (num1 > num2) {
//     console.log("1st Number is large");
// }
// else{
//     console.log("2nd Number is Large");
// }




/*-------------- Program No 02: Accept number and display sign in alert box ---------------*/


// var num1 = +prompt("Enter 1st Number");

// if (num1 > 0) {
//     alert("Sign is Positive");
// }
// else if(num1 < 0){
//     alert("Sign is Negative");
//  }
// else if(num1 ===0){
//     alert("Sign is Zero");
// }
// else {
//     alert("This is not a Number");
// }



/*-------------Program No 03: Accept 5 numbers in prompts and display larger one in console */

// var num1 = +prompt("Enter 1st Number");
// var num2 = +prompt("Enter 2nd Number");
// var num3 = +prompt("Enter 3rd Number");
// var num4 = +prompt("Enter 4th Number");
// var num5 = +prompt("Enter 5th Number");

// if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//     console.log("1st Number is large");
// }
// else if (num2 > num3 && num2 > num4 && num2  > num5) {
//     console.log("2nd Number is large");
// }
// else if (num3 > num4 && num3 > num5 ) {
//     console.log("3rd Number is large");
// }
// else if ( num4 > num5) {
//     console.log("4th Number is large");
// }
// else{
//     console.log(" 5th Number is Large");
// }



/*------------Program No 04 Loop from 0 to 15 and display every even or odd number---------------*/

// for (let i = 0; i<16 ; i++){

//     if (i%2==0){
//         alert(`${i} is Even `);
//     }
//     else{
//         alert(`${i} is odd`);
//     }
// }


/*----------------------Program No 05: Accept Marks and compute Average and then display Grade-----------------*/

// var num1 = +prompt("Enter Math's Mark");
// var num2 = +prompt("Enter English Mark");
// var num3 = +prompt("Enter Urdu Mark");
// var num4 = +prompt("Enter Computer Mark");
// var num5 = +prompt("Enter Physics Mark");

// let sum = num1 + num2 + num3 + num4 + num5;
// let avg =sum/ 500 * 100;

// if (avg < 60) {
//     console.log("Grade is 'F'");
// }
// else if (avg < 70) {
//     console.log("Grade is 'D'");
// }
// else if (avg < 80) {
//     console.log("Grade is 'C'");
// }
// else if (avg < 90) {
//     console.log("Grade is 'B'");
// }
// else if (avg < 100) {
//     console.log(" Grade is 'A'");
// }


/*------------Program No 06: Loop for 1 to 100 and for multiples of 3 print "Fizz" ,
 for multiples of 5 print "Buzz" , for multiples of 3 and 5 Both print "FizzBuzz"-------------------*/


//  for (let i = 1; i<101;i++) {
//     if (i %3 === 0 && i %5 === 0) {

//         document.write("FizzBuzz <br>");
//     }
//         else if (i %3===0){
//             document.write("Fizz <br>");
//         }
//         else if(i%5===0){
//             document.write("Buzz <br>");
//         }
//  }



/*---------- Program No 07: Use Nested Loop for and construct pattern-----------------=-------*/ 

// for(let i=0; i <6 ;i++){
//     for (let j=0; j <i;j++){
//         document.write(" *");
//     }
//     document.write("<br>");
// }