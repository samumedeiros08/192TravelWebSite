const express = require('express');
const app = express();
const request = require('request');


weatherMiddleware = (req,res, next) =>{
    res.locals.temp = 'TEMPERATURE'

    const apiKey = '45bb545363e29f669bbaeea866bdad2d';
    
    const geoApiKey = '15b7e6399cb258b5855c32f8b2e80e65'

    async function geoApi(){
        const response = await fetch(`http://api.ipstack.com/check?access_key=${geoApiKey} `)
        const geoJSON = await response.json();
        let city = geoJSON.city;
        
         if (req.body.city){
            city = req.body.city;
         }
         console.log(geoJSON.city, geoJSON.zip)
         
         async function weatherApi(){
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
            const weatherJSON = await response.json();
            
            res.locals.temp = weatherJSON.main.temp;
            res.locals.cit = city;
            
           
            console.log(res.locals.temp);
            console.log(res.locals.cit)
            console.log('Weather middleware');
            next();
        }
    
        weatherApi()
    }
    
geoApi()

    
}

module.exports = {weatherMiddleware}

