const express = require('express');
const db = require('./config/mongoose-connection');
const app = express();

// acquire all package for cookies
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();


// setting view Engine 
app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");


const indexRouter = require('./routes/indexRoute');
const usersRouter = require('./routes/usersRoute');       
const productRouter = require('./routes/productsRoute');     
const ownerRouter = require('./routes/ownersRoute');            


// setting middleware
app.use(express.json());
app.use(express.urlencoded("extended : true"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// setting routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/owners', ownerRouter);
app.use('/products', productRouter);

app.listen(3000);
