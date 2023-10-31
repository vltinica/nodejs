import EventEmitter from "events";

class Post extends EventEmitter {
    constructor(author, text) {
        super();
        this.author = author;
        this.text = text;
        this.likeQty = 0;
        this.on("likePost", (username) => {
            console.log(`${username} liked your post!`);
        });
        this.on("error", (error) => console.error(error));
    }

    like(username) {
        if (!username) {
            return this.emit(
                "error",
                new Error("No username in the like requist!")
            );
        }
        this.likeQty += 1;
        this.emit("likePost", username);
    }
}

const myPost = new Post("Vladimir", "My great post!");

// console.log(myPost.author);
// console.log(myPost.text);
// console.log("-----//----");
// console.log(myPost.likeQty);
myPost.like("Foma");
setTimeout(() => myPost.like("Ema"), 1000);
setTimeout(() => myPost.like("Alex"), 2000);
// console.log(myPost.likeQty);
