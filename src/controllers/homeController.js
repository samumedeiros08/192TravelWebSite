const express = require('express');

const HomeModel = require('../models/HomeModel')

HomeModel.create ({
    title: 'This is an title for tests in another try',
    description: 'Description for tests NUMBER 2'
})
    .then( data => console.log(data) )
    .catch( e => console.log(e) );

HomeModel.find()
    .then(data => console.log(data))
    .catch(e => console.log(e));

exports.homePage = (req, res) => {
    res.render ('index');
    return;
}

exports.homePost = (req, res) => {
    // res.send(`Hello, ${req.body.city}`);
    res.render('index');
    console.log(req.body.city);
    
}

exports.homePostTans = (req, res) => {
    res.render('index');

}

