import {Transform} from "stream";
import fs from "fs";
import { log } from "console";

const upperCaseStream = new Transform({
    transform: function(chunk, encoding,cb) {
        const upperCased = chunk.toString().toUpperCase();
        cb(null,upperCased)
    }
});

const reverseStream = new Transform({
    transform(chunk,uncoding,cb){
        const arrayOfChars = chunk.toString().split('');
        const lastChar = arrayOfChars.pop()
        const reversed = arrayOfChars.reverse().concat(lastChar).join('');
        cb(null,reversed)
    }
})

// process.stdin.pipe(upperCaseStream).pipe(process.stdout)
process.stdin.pipe(reverseStream).pipe(process.stdout);





// const filePath = "./files/stdin-dump.txt"
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(process.stdout);
// process.stdin.pipe(process.stderr);
// process.stdin.pipe(writeStream);

