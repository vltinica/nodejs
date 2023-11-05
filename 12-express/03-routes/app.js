const express = require("express");
const router = require("./routes/index")
const app = express();

app.use(router);

app.listen(8000, () => {
    console.log("Server was started on port 8000");
})




