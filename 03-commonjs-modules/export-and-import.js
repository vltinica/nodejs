const { myName, myHobbies } = require("./multiple-export");

const myFrindsName = "Alice";

module.exports.myName = myName;
module.exports.myFrindsName = myFrindsName;
module.exports.myGreatHobbies = myHobbies;
