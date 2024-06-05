const route = require('express').Router();
const User = require('../db/Post');


const getDateTime = () =>{
    const date = new Date();
    let str = ''+date.getFullYear();

    if(date.getMonth() < 10)
        str += '-0' + date.getMonth();
    else 
        str += '-' + date.getMonth();

    if(date.getDate() < 10)
        str += '-0' + date.getDate();
    else 
        str += '-' + date.getDate() + ' ';

    if(date.getHours() < 10)
        str += '0' + date.getHours();
    else 
        str += date.getHours();

    if(date.getMinutes() < 10)
        str += ':0' + date.getMinutes();
    else 
        str += ':' + date.getMinutes();
    
    str += ':' + date.getSeconds();
    return str;
}

route.post('', async (req, res) => {
    const user = {}
    user.title = req.body.title;
    user.description = req.body.description;
    user.category = req.body.category;
    user.cust_url = req.body.cust_url;
    user.date = req.body.date;
    user.target_url = req.body.target_url;

    let userModel = new User(user);
    await userModel.save((err) => {
        if(err)
            res.json(err);
        else
            res.json(user);
    });
});


route.get('', async (req, res) => {
    const date = getDateTime();
    console.log(date);
    try {
        const data = await User.find({date: {$gt: date}})
        res.json(data);
    } catch(err) {
        res.json(err)
    }
    
});


route.get('/:cat', async (req, res) => {
    const date = getDateTime();
    const data = await User.find({ category: req.params.cat, date: {$gt: date}}, (err, data) => {
        if(err)
            res.json(err);
        else
            res.json(data);
    });
});


route.get('/:cat/:slug', async (req, res) => {
    const date = getDateTime();
    const data = await User.find({ category: req.params.cat, cust_url: req.params.slug, date: {$gt: date}}, (err, data) => {
        if(err)
            res.json(err);
        else
            res.json(data);
    });
});

module.exports = route;