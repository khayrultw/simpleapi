const mongoose = require('mongoose');

//const DBURL = 'mongodb+srv://khayrul123:AAaa11..,,@cluster0-6kqzz.mongodb.net/test?retryWrites=true&w=majority';

const DBURL = 'mongodb+srv://khayrul1234:khayrul1234@cluster0.q6u9x.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async () => {
    await mongoose.connect(DBURL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('connected...'); 
};


module.exports = connectDB;