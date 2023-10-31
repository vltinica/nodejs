const fs = require("fs");
const comments = require("./data");

function getHome(req, res) {
    fs.readFile("./files/comment-form.html", (err, data) => {
        if (err) {
            console.error(err); // Добавлено для логирования ошибки
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            res.end("Server error while loading HTML file!");
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        }
    });
}

function getHTML(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body><div>");
    res.write("<h1>Greetings from the HTTP server!</h1>");
    res.write("</div></body></html>");
    res.end(); // Fixed: Moved res.end() here to end the response
}

function getTEXT(req, res) {
    res.statusCode = 200; // Fixed: Corrected assignment operator
    res.setHeader("Content-Type", "text/plain");
    res.end("This is plain text!");
}

function getCOMMENTS(req, res) {
    res.statusCode = 200; // Fixed: Corrected assignment operator
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(comments));
}

function postCOMMENTS(req, res) {
    res.setHeader("Content-Type", "text/plain");

    if (req.headers["content-type"] === "application/json") {
        let commentJSON = "";

        req.on("data", (chunk) => (commentJSON += chunk));

        req.on("end", () => {
            try {
                comments.push(JSON.parse(commentJSON));
                res.statusCode = 200;
                res.end("Comment data was received!");
            } catch (error) {
                res.statusCode = 400;
                res.end("Invalid JSON");
            }
        });
    } else {
        res.statusCode = 400;
        res.end("Data must to be in JSON format!");
    }
}

function handleNotFound(req, res) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Page not found!</h1>");
}

module.exports = {
    getHTML,
    getTEXT,
    getCOMMENTS,
    postCOMMENTS,
    handleNotFound,
    getHome,
};
