const mongoose = require('mongoose');

const post = mongoose.Schema({
    title: {
        type: String
    },
    category:{
        type: String
    },
    description: {
        type: String
    },

    cust_url: {
        type: String
    },

    date: {
        type: String
    },

    target_url:{
        type: String
    }

});


module.exports = User = mongoose.model('posts', post);