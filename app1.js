// // // // // // // for (var i = 0; i < 3; i++) 
// // // // // // // {
// // // // // // //     setTimeout(function()
// // // // // // //      { alert(i); }, 5000 + i);
// // // // // // //   }

// // // // // //  // Declare the myGlobal variable below this line
// // // // // // // let myGlobal = 10;

// // // // // // // function fun1() {
// // // // // // //   // Assign 5 to oopsGlobal Here
// // // // // // //  oopsGlobal = 5
// // // // // // // }

// // // // // // // // Only change code above this line

// // // // // // // function fun2() {
// // // // // // //   var output = "";
// // // // // // //   if (typeof myGlobal != "undefined") {
// // // // // // //     output += "myGlobal: " + myGlobal;
// // // // // // //     console.log("end");
// // // // // // //   }
// // // // // // //   if (typeof oopsGlobal != "undefined") {
// // // // // // //     output += " oopsGlobal: " + oopsGlobal;
// // // // // // //   }
// // // // // // //   console.log(output);
// // // // // // //   console.log(myGlobal);
// // // // // // // }

// // // // // // // fun2();


// // // // // // // const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// // // // // // // function golfScore(par, strokes) {
// // // // // // //   // Only change code below this line
// // // // // // // if( strokes == 1){
// // // // // // //   return "Hole-in-one!";
// // // // // // // }
// // // // // // // else if( strokes <= par-2){
// // // // // // //   return "Eagle";
// // // // // // // }
// // // // // // // else if( strokes == par-1){
// // // // // // //   return "Birdie";
// // // // // // // }
// // // // // // // else if( strokes == par){
// // // // // // //   return "Par";
// // // // // // // }
// // // // // // // else if( strokes == par + 1){
// // // // // // //   return "Bogey";
// // // // // // // }
// // // // // // // else if( strokes == par + 2){
// // // // // // //   return "Double Bogey";
// // // // // // // }

// // // // // // // else if( strokes >= par + 3){
// // // // // // //   return "Go Home!";
// // // // // // // }
// // // // // // // else
// // // // // // //   return "Change Me";
// // // // // // //   // Only change code above this line
// // // // // // // }

// // // // // // // golfScore(5, 4);





// // // // // // function switchOfStuff(val) {
// // // // // //   let answer = "";
// // // // // //   // Only change code below this line
// // // // // //  switch (val) {
// // // // // //     case 1:
// // // // // //       answer = "alpha";
// // // // // //       break;
// // // // // //     case 2:
// // // // // //       answer = "bird";
// // // // // //       break;
// // // // // //     case 3:
// // // // // //       answer = "cat";
// // // // // //       break;
// // // // // //     default:
// // // // // //     answer ="stuff"

// // // // // //   // Only change code above this line
// // // // // //   return answer;
// // // // // // }}

// // // // // // console.log(switchOfStuff(1));


// // // // // function isLess(a, b) {
// // // // //   // Only change code below this line
// // // // //     return (a < b);
// // // // //   // Only change code above this line
// // // // // }
// // // // // console.log(isLess(10,"15"));
// // // // // Setup
// // // // function abTest(a, b) {
// // // //   // Only change code below this line
// // // // if(a <0 || b< 0){
// // // //   return  undefined;
// // // // }


// // // //   // Only change code above this line

// // // //   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// // // // }

// // // // console.log(abTest(-1,2));




// // // let count = 0;

// // // function cc(card) {
// // //   // Only change code below this line
// // // switch(card){
// // //     case 2:
// // //     case 3:
// // //     case 4:
// // //     case 5:
// // //     case 6:
// // //        count++;
// // //        break;
// // //     case 7:
// // //     case 8:
// // //     case 9:
// // //         count == 0;
// // //         break;
// // //     case 10:
// // //     case 'J':
// // //     case 'Q':
// // //     case 'K':
// // //     case 'A':
// // //           count--;
// // //           break;
// // // }
// // // if (count > 0){
// // //   return count+" Bet";
// // // }
// // // else 
// // //   return count+" Hold";

// // //   // return "Change Me";
// // //   // Only change code above this line
// // // }

// // // console.log(cc(2));
// // // console.log(cc(3));
// // // console.log(cc(7));
// // // console.log(cc('K'));
// // // console.log(cc('A'));

// // // Setup
// // // const testObj = {
// // //   "hat": "ballcap",
// // //   "shirt": "jersey",
// // //   "shoes": "cleats"
// // // };

// // // // Only change code below this line
// // // const hatValue = testObj["hat"];      // Change this line
// // // const shirtValue = testObj.shirt;    // Change this line
// // // console.log(hatValue);
// // // console.log(shirtValue);


// // // const ourDog = {
// // //   "name": "Camper",
// // //   "legs": 4,
// // //   "tails": 1,
// // //   "friends": ["everything!"]
// // // };

// // // ourDog["name"] = "huy";


// // // for(var i=0; i<ourDog.length; i++){

// // // // console.log(ourDog.[][]);



// // // }
// // // console.log(ourDog.name);


// // const myStorage = {
// //   "car": {
// //     "inside": {
// //       "glove box": "maps",
// //       "passenger seat": "crumbs"
// //      },
// //     "outside": {
// //       "trunk": "jack"
// //     }
// //   }
// // };
// // const gloveBoxContents = 
// // console.log(myStorage["car"]["inside"]["glove box"]);




// const myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];


// const secondTree =myPlants.type;
// // const secondTree =myPlants[1].list[1];

// console.log(secondTree);

// /// question




// // Record Collection
// // You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

// // You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

// // Your function must always return the entire record collection object.
// // If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// // If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// // If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// // If value is an empty string, delete the given prop property from the album.
// // Note: A copy of the recordCollection object is used for the tests.

// // After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA

// // After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last element.

// // After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set

// // After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.

// // After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.

// // After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set

// // After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide


// ///code
// // Setup
// // const recordCollection = {
// //   2548: {
// //     albumTitle: 'Slippery When Wet',
// //     artist: 'Bon Jovi',
// //     tracks: ['Let It Rock', 'You Give Love a Bad Name']
// //   },
// //   2468: {
// //     albumTitle: '1999',
// //     artist: 'Prince',
// //     tracks: ['1999', 'Little Red Corvette']
// //   },
// //   1245: {
// //     artist: 'Robert Palmer',
// //     tracks: []
// //   },
// //   5439: {
// //     albumTitle: 'ABBA Gold'
// //   }
// // };

// // // Only change code below this line
// // function updateRecords(records, id, prop, value) {
// // if(prop != "tracks" && value !=""){
// //     records[id][prop]=value;
// // }

// // else if(prop === "tracks" &&records[id].hasOwnProperty("tracks") === false ){
// //     records[id][prop] = [value];
// // }
// // else if(prop === "tracks" && value !=""){
// //     records[id][prop].push(value);
// // }
// // else if(value ===""){
// //     delete records[id][prop];
// // }

// //   return records;
// // }

// // console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));


// // //another




// // //Another solution Only change code below this line
// // function updateRecords(records, id, prop, value) {
// //   if (value === '') {
// //     delete records[id][prop];
// //   } else if (prop === 'tracks') {
// //     records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
// //     records[id][prop].push(value);
// //   } else {
// //     records[id][prop] = value;
// //   }
// //   return records;
// // }




// // // Setup
// // const myArray = [];

// // // Only change code below this line
// // var i=5;
// // while( i >= 0){
// // myArray.push(i);
// // i--;
// // }



// // console.log(myArray);



// // // Setup
// // const myArray = [];

// // // Only change code below this line

// // for(let i = 1; i < 6; i++ ){

// // myArray.push(i);

// // }
// // console.log(myArray);

// // // Setup
// // const myArray = [];

// // // Only change code below this line

// // for(let i = 1; i < 10; i+=2){
// //   myArray.push(i);
// // }


// // const myArray = [];

// // // Only change code below this line

// // for(let i = 9; i >= 0; i-=2 ){
// //   myArray.push(i);

// // }


// // Setup
// // const myArr = [2, 3, 4, 5, 6];

// // // Only change code below this line

// // for(let i =0; i<myArr.length; i++){


// //   console.log(myArr[i]);
// // // }

// // const myArr = [2, 3, 4, 5, 6];

// // // Only change code below this line
// // let total=0;

// // for(let i=0; i<myArr.length; i++){

// // total+=myArr[i];
// // }
// // console.log(total);


// // const arr = [
// //   [1, 2], [3, 4], [5, 6]
// // ];

// // for (let i = 0; i < arr.length; i++) {
// //   for (let j = 0; j < arr[i].length; j++) {
// //     console.log(arr[i][j]);
// //   }
// // }






// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
// for(let i= 0; i<arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//       product= product*arr[i][j] ;
//     }
// }
//   // Only change code above this line
//   return product;
// }

// // console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));


// console.log(multiplyAll([[1, 2], [2, 2], [2, 1, 2]]));
// //                          2       4         4     
// //                                                                                       



// Setup
// const myArray = [];
// let i = 10;

// Only change code below this line
// do {
//   myArray.push(i);
//   i++;
// }while (i < 5)


// console.log(myArray);


///16 feb

// function recur(val){
//   if(val < 0){
//     return undefined;
//   }
//  else if(val < 2){
//   return 1;
// }

// else{
//   return val*recur(val-1);
// }

// }

// console.log(recur(9));

// function arr(arr,n){
// let product=1;
// for(var i=0;i<n+1; i++){
//   product *=arr[i];
// }
// console.log(product);
// }

// arr([1,2,3,4,54,5],3);


//convert above fun into array

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }
// console.log(multiply([1,2,3,4,54,5],3));



// function sum(arr, n) { 
// if( n <= 0){
//   return 0;
// }
// else{
//   return sum(arr, n-1) + arr[n-1];
// }
//  }
// console.log(sum([2, 3, 4, 5], 3));



// // Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
// if(name === contacts.firstName && contacts.hasOwnProperty(prop)){
//   return  contacts[firstvalue][prop];
// }
// else{
//   return "not";
// }
//   // Only change code above this line
// }

// // console.log(lookUpProfile("Akira", "likes"));

// console.log(lookUpProfile("Sherlock", "Holmes"));







// function fibinanci(n){
// if (n < 2){
//   return n;
// }
//  return fibinanci( n - 1 ) + fibinanci(n - 2);
// }

// console.log(fibinanci(12));





// var x='5', y='10';
// console.log(+x + +y);


//find max from an array

// let array = [-1, -1220, 30, 45, 5, 6, 89, 170];

// function amxAr(arr){
// let max= arr[0];
// for(let i =0; i<arr.length;i++){
//     if(arr[i] <= max){
//         max = arr[i];
//     }
    
// }
// return max;
// }
// console.log(amxAr(array));




// const secondSmallestNumber = (arr = []) => {
//     let secondSmallestNumber = arr[arr.length -1]
//     let smallestNumber = arr[arr.length -1]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < smallestNumber){
//             secondSmallestNumber = smallestNumber
//             smallestNumber = arr[i]
//         }else if(arr[i] < secondSmallestNumber && arr[i] != smallestNumber){
//             secondSmallestNumber = arr[i] 
//         }
//     }
//     return secondSmallestNumber
// }




// console.log(secondSmallestNumber([1,2,8,4]));


// 2nd hightest in array
// let array = [1, 12220, 30, 45, 5, 6, 890, 170];
// function sH(arr){
//     let max=arr[0];
//     let secH= arr[0];
//     for(let i=0; i<arr.length;i++){
//             if(arr[i] > max){
//                 secH=max;
//                     max=arr[i];}
//               else if(arr[i] > secH){
//                     secH = arr[i]
//                 }
                
                
//             }
//             return secH;
//     }


//     console.log(sH(array));

// const secondLargestNumber = (arr = []) => {
//     let secondLargestNumber = arr[0]
//     let largestNumber = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largestNumber){
//             secondLargestNumber = largestNumber
//             largestNumber = arr[i]
//         }else if(arr[i] > secondLargestNumber){
//             secondLargestNumber = arr[i]
//         }
//     }
//     return secondLargestNumber
// }





// function secLowest(arr){
// let lowest =arr[0];
// let secLowest =arr[0];
// for(let i=0;i<arr.length;i++){
//         if(arr[i] <= lowest){
//             secLowest = lowest;
//             lowest =arr[i];
//         }
//         else if(arr[i] <= secLowest && arr[i] != lowest){
//             secLowest =arr[i];
//         }


// }
// return secLowest;
// }

// console.log(secLowest([101,11,21,33,40,45]));

// let arr = [1, 12220, 30, 45, 5, 6, 890, 170];


// const duplicate = (arr) => {
//     let compare = []
//     let dup = []
//     for(let item of arr){
//         if(!compare.includes(item)){
//             compare.push(item)
//         }
//         else{
//             dup.push(item)
//         }
//     }
//     return dup
// }


// console.log(duplicate([6,2,2,4,5,6]))


// function duplicate(arr){
    
// }






// function validatePalin(str) {
//     let len = str.length
//     for(let i = 0; i < len/2; i++){
//         if(str[i] !== str[len - 1- i]){
//             alert('Its not a palin drome')
//         }
//     }
//     alert('Its a palin drome')
// }
// const string = prompt("Enter string or number to check whether it is palin drome or not")
// const value = validatePalin(string)
// console.log(value);




// const arr = [1, 2, 3, 4]; 
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
// sum= sum + arr[i];
//     }
 


// console.log(sum);
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));
// function reverseString(str) {
//     var newString = "";

//     for (var i = str.length - 1; i >= 0; i--) { 
//         newString += str[i]; // or newString = newString + str[i];
//     }
    
//     return newString; // "olleh"
// }
 
// console.log(reverseString('hello'));




// let a=4;
// let b=3;
// [a,b] = [b,a];
// console.log(`value of a is ${a} and value of b is ${b}`);


// let str = 'The quick brown for'
// let newStr ='';
// for(let i=str.length-1;i>0;i--){
//     newStr +=str[i];
// }
// console.log(newStr);


// let user={
//     name: "rehan",
//     age:22
// };
// let clone ={};

// for(let key in user){
//     clone[key] = user[key];
// }

// clone.name ="Pete";
// console.log(user.name);

let user={
        name: "rehan",
        age:22
    };
    let clone = Object.assign({},user);
clone.age=32;
    console.log(user.age);
    








//copying an object variable 
//creates one more refer
// console.log(Object.keys(user));
// console.log(Object.values(user));

