require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const route = require('./routes');

const mongoose = require('mongoose');
var password = encodeURIComponent(process.env.PASSWORD);
var username = encodeURIComponent(process.env.USERNAME);
const connectionString = `mongodb+srv://${username}:${password}@192viagens.7oldh0l.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.emit('touchDB');
        console.log('conection with DB')
    })
    .catch(e => console.log(e))


app.use( express.urlencoded( { extended:true } ) )
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(route);

app.on('touchDB', ()=>{
    app.listen('3000', ()=>{
        console.log('Hi listening on port 3000')
    })  
})
