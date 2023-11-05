const express = require("express");
const router = express.Router();
const {getUsersHandler,
    getSingleUserHandler,
    postUsersHandler} = require("../controllers/users");


router.get("/", getUsersHandler);
router.post("/", postUsersHandler);
router.get("/:userId", getSingleUserHandler)

module.exports = router;