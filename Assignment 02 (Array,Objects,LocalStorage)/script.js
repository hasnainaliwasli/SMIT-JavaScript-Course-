/*----------Program No 01 : Closure Function to receive Parameter in parent and child Function and give sum----- */



// function addValue(value) {
//     return function(value2) {
//         document.write(value + value2);
//     };

// }

// let firstNo = +prompt("Enter Parent Function Value : ");
// let secNo = +prompt("Enter Child Function Value : ");
// let innerFunc = addValue(firstNo);
// innerFunc(secNo);



/*-----------Program No: 02. write recursive function to search an array and Answer in tru false ---------------*/



// function searchValue (arr , value) {

//     if(arr.length === 0){
//         return false;
//     }
//     else if(arr[0] === value){
//         return true
//     }
//     else {
//         return searchValue(arr.slice(1), value);
//     }
// }

// let arr = [1,2,3,4,5,6,7,8,9];
// let result = searchValue(arr,4);
// console.log(result);



/*--------Program No: 03. function that add new paragraph element and also take string---------- */



// function addParagraph(stringText) {

//     let tag = document.createElement("p");
//     let texts = document.createTextNode(stringText);

//     tag = tag.appendChild(texts);

//     let element = document.getElementById("new");

//     element.appendChild(tag);

// }
// let stringText = prompt("Enter a String/Paragraph: ")

// addParagraph(stringText);



/*----------Program No: 04. Create Function take string for unorder list-----------*/



// function addList(data) {

//         let list = document.querySelector("ul");
//         let newElement = document.createElement("li");

//         newElement.innerText = data;

//         list.appendChild(newElement);

//     }

//     let data1 = prompt("Enter 1st item: ");
//     let data2 = prompt("Enter 2nd item: ");
//     let data3 = prompt("Enter 3rd item: ");
//     addList(data1)
//     addList(data2)
//     addList(data3)

/*--------Program No: 05. Function takes two arguments one for ID ,2nd for Color and change background of element -----------*/

// function backChange(reference, colorOf) {
//     let para = document.getElementById(reference);
//     para.style.backgroundColor = colorOf;
// }

// backChange("p2", "red")



/*-------Program No: 06. Two Parameter 1st for Name for LocalStorage 2nd for Object and save at LocalStorage -----------*/



// function saveData(name, obj) {

//     let stringify = JSON.stringify(obj)
//     localStorage.setItem(name, stringify);
// }

// let myObj = {
//     name: "Hasnain Ali",
//     fatherName: "M.Aslam",
//     className: "BsCs",
//     rollNo: 29,
// }
// let objName = prompt("Enter object name: ");
// saveData(objName, myObj)



/*-------Program No: 07.  Get Data from localStorage.---------*/



// function getData(name) {
//     let data = localStorage.getItem(name);
//     console.log(data);
// }

// let myObj = JSON.parse(localStorage.getItem("new"));
// let keys = Object.keys(myObj);
// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
// }



/*---------Program No: 08 .Store keys of object in local storage as keys and Values of objects as Value in local storage one by one then retreive them one by one and combine them in object and show-------------------*/

// function storeObj(obj)
// {
//   for (let key in obj) {
//     /*// console.log(key + ":" + obj[key]);//*/

//     //here key is the keys of the object
//     //and obj[key] is the value of the key

//     localStorage.setItem(key, obj[key]);
//   }

//   let getObj = {};

//   for (let key in obj) {
//     let value = localStorage.getItem(key);
//     getObj[key] = value;
//   }
//   return getObj;
// }

// let myObj = {
//   name: "Hasnain Ali",
//   fatherName: "M.Aslam",
//   className: "BsCs",
//   rollNo: 29,
// };

// let x = storeObj(myObj);

// console.log(x);
