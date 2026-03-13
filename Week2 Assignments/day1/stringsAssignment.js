// Example 1 - to return length of the last word in the given string

let str1 = 'Hello World';

let words = str1.split(" ");
let lastWord = words.slice(-1)[0];
console.log(lastWord)
let str1Len = lastWord.length;
console.log("The Last word in the given string is " +lastWord, " and the length of it is " +str1Len);



// Example 2 - to return length of the last word in the given string containing spaces

let str2 = " fly me  to  the moon ";

let words1 = str2.trim().split(" ");
let lastWord1 = words1.slice(-1)[0];
console.log(lastWord1)
let str2Len = lastWord1.length;
console.log("The Last word in the given string is " +lastWord1, " and the length of it is " +str2Len);


// Example 3 - Function to check if two strings are anagrams

function isAnagram(str3,str4) {

 let sortedStr3 = str3.trim().toLowerCase().split("").sort().join("");
 let sortedStr4 = str4.trim().toLowerCase().split("").sort().join("");
 
 let comparedValue = (sortedStr3 === sortedStr4)
 if (comparedValue == true){
    console.log(comparedValue,`The two strings ${str3}${str4} are Anagrams`)
 }  else {
    console.log(comparedValue,`The two strings ${str3}${str4} are not Anagrams`)
 } 

}

isAnagram(" LISten ","  SILent");
isAnagram("HElLo   "," WoRLd ")