const router = require("express").Router();
const Blog = require("../models/blog");

// Test Route
router.get('/blogSession', async (req, res) => {
    res.json("Hello World");
});

// Get All Blogs
router.get('/blogSession/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;
