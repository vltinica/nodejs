import { season, temperatere } from "./named-export.mjs";
import { isRaining, humidity } from "./inline-exports.mjs";
//! import getData from "./default-export.mjs"; we can change the name of import
import getDataFromServer from "./default-export.mjs";

import DEFAULT_SERVER, { USERNAME, PASSWORD } from "./mixed-exports.mjs";

console.log(season);
console.log(temperatere);

console.log(isRaining);
console.log(humidity);

getDataFromServer("https://jsonplaceholder.typicode.com/posts/1")
    .then((post) => console.log(post))
    .then((err) => console.error(err));

console.log(DEFAULT_SERVER);
console.log(USERNAME, PASSWORD);
