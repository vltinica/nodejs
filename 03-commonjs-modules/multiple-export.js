const myName = "Vladimir";
const myHobbies = ["swimming", "boxing", "cycling"];
const myFavoriteNumber = 22;

console.log("Text from the multiple-export CommonJS module");

module.exports.myName = myName;
module.exports.myHobbies = myHobbies;
module.exports.myFavoriteNumber = myFavoriteNumber;
