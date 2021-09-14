
const express  = require('express');
const app =  express();


const dotenv = require('dotenv')

dotenv.config()


app.use(express.static('public'));






app.listen(process.env.PORT || 3000, () => {

        console.log('hola !!')
    })