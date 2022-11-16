const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
const cartelRoute = require("./routes/cartel");
const postsRoute = require("./routes/login");

var cors = require('cors');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const { config } = require("dotenv");


//initilizations
const app = express(); 

//conexion mongoose
require ("./config/database.js");

// settings
const port = process.env.PORT || 9000;
app.set('views',path.join(__dirname,'views'));


app.use(cors());

app.engine('hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));

app.set('view engine', '.hbs');

// middlewares
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", cartelRoute);
app.use("/api", postsRoute);

app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));


/* routes*/
 
  app.use(require('./routes/user'));
  app.use(require('./routes/cartel'));
  app.use(require('./routes/login'));
  app.use("/auth", require("./routes/auth"));  


  
//static
app.use(express.static(path.join(__dirname, 'public')));

// server listening
app.listen(port, () => console.log("Server listening to", port));