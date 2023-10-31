const fs = require("fs");
const dns = require("dns");

function info(text) {
  console.log(text, performance.now().toFixed(2));
}

console.log("Program start");

setTimeout(() => {
  info("Timeout_1");
}, 0);

setTimeout(() => {
  process.nextTick(() => info("Next tick_2"));
  info("Timeout_2");
}, 100);

fs.writeFile("./test.txt", "Hello Node JS", () => info("File written"));

Promise.resolve().then(() => info("Promise_1"));

process.nextTick(() => info("NextTick"));

setImmediate(() => info("Immediate_1"));

let intervalCount = 0;
const intervalId = setInterval(() => {
  info(`Interval ${(intervalCount += 1)}`);
  if (intervalCount === 2) clearInterval(intervalId);
}, 50);

dns.lookup("localhost", (err, address, family) => {
  info("DNS_1 localhost");
  Promise.resolve().then(() => info("Promise_2"));
  process.nextTick(() => info("Next tick_3"));
});

console.log("Program end");
