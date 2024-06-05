const mongoose = require('mongoose');

const DBURL = 'mongodb+srv://nullptr:CxjyiYxPbVCT0vAd@fcapi.djdbojt.mongodb.net/?retryWrites=true&w=majority&appName=fcapi';

const connectDB = async () => {
    await mongoose.connect(DBURL);
    console.log('connected...'); 
};


module.exports = connectDB;