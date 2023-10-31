import fs from "fs";
const fileName = "./files/third.txt";
const copiedFileName = "./files/third-copy.txt";

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(copiedFileName);
readStream.pipe(writeStream);

readStream.on("end", () => console.log("Read stream ended"));
writeStream.on("finish", () => console.log("Write stream ended"));
writeStream.on("close", () => console.log("File was copied"))