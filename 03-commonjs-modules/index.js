const { myName, myHobbies, myFavoriteNumber } = require("./multiple-export.js");
const {
    myFrindsName,
    myName: myOtherName,
    myGreatHobbies,
} = require("./export-and-import.js");
const greeting = require("./my-modules/single-export.js");

console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

myHobbies.push("climbing");

greeting(myName);

console.log(__filename);

console.log(myOtherName);
console.log(myFrindsName);
console.log(myGreatHobbies);
