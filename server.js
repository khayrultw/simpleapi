const express = require('express');
const bodyParser = require('body-parser')
const posts = require('./api/posts');
const connectDB = require('./db/connection');
const cors = require('cors');

const app = express();

app.use(cors());

connectDB()

app.use(bodyParser.json());

app.use('/posts', posts);


app.listen(4444, () => console.log('server is running...'));