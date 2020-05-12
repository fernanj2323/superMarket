const path = require('path');
const express = require('express');
const app = express();
const router = express.Router(); 
const cors = require('cors');
const { mongoose } = require('./configDB/database');
const properties = require('./configDB/properties');

const http = require ('http');


////START SERVER ////
main();




///FUNCTIONS//// 
function main ()
{
    app.set(properties.PORT, process.env.PORT || 3000);
    app.listen(properties.PORT, () => {
        console.log(`server on port ${properties.PORT}`);
    });

    middlewares();
}


//MIDLEWARES// 
function middlewares(){


    app.use(cors({origin: '*'}));
    app.use(function(req, res, next){
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETED');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    })   
    app.use(express.json());
    routes();
}


function routes(){
    
   app.use('/api/items', require('./routes/items.routes'));
   app.use('/api/categorys', require('./routes/category.routes'));
   

   
   

}