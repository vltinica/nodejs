const express = require("express");
const router = express.Router();
const {getCommentsHandler,
    getSingleCommentHandler,
    postCommentsHandler,
    deleteSingleCommentHandler} = require("../controllers/comments");


router.get("/", getCommentsHandler);
router.post("/", postCommentsHandler);
router.get("/:commentId", getSingleCommentHandler);
router.delete("/:commentId", deleteSingleCommentHandler);

module.exports = router;