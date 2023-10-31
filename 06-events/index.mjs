import { EventEmitter } from "events";
const myEmitter = new EventEmitter();

const timeoutListenerFn = (secondsQty) => {
    console.log(`Timeout event in ${secondsQty} seconds!`);
};

myEmitter.on("timeout", timeoutListenerFn);

//! in 1sec.
setTimeout(() => {
    myEmitter.emit("timeout", 1);
}, 1000);

//! in 2sec.
setTimeout(() => {
    myEmitter.emit("timeout", 2);
}, 2000);

myEmitter.once("singleEvent", () => {
    console.log("Single event occurred");
});

//! in 1sec.
setTimeout(() => {
    myEmitter.emit("singleEvent");
}, 500);

//! in 2sec.
setTimeout(() => {
    myEmitter.emit("singleEvent");
}, 1500);

setTimeout(() => myEmitter.off("timeout", timeoutListenerFn), 3000);

//! for check up
setTimeout(() => {
    myEmitter.emit("timeout", 4);
}, 4000);
