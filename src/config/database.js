const mongoose = require("mongoose");

mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("conectada la BD"))
.catch((error)=> console.log(error))