const express = require('express');
const morgan = require('morgan')
const app = express();

//settings
app.set('port',process.env.PORT|| 3000);
//Routes
//Middlewares 
app.use(morgan('dev'));
//Static files
//STarting the server
app.listen(app.get('port'),()=>{
    console.log(`Server on Port ${app.get('port')}`)
});