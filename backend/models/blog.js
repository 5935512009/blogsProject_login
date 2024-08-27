const mongoose = require('mongoose');
const express = require('express');

const app = express();
// middlewares
app.use(express.json());

const blogsShema = new mongoose.Schema({
    name: String,
    email: String,
    text: String
})

const Blog = mongoose.model('Comment', blogsShema);

module.exports =  Blog ;