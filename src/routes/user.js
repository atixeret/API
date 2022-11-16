  const express = require("express");
  const userSchema =  require("../models/user");

  const router = express.Router();

router.get("/fichas/user", (req, res) => {
  res.render("user");
});


// create user
router.post("/users",async (req, res) => {
    const user = await userSchema.create(req.body);
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({ message: 'Error 400 Good Not Found'}))
  });


  //get all users
  router.get("/users/", (req, res) => {
     userSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: 'Error 400 Good Not Found'}))
  });

//get a users
  router.get("/users/:id", (req, res) => {
    const { id } = req.params;
     userSchema
   .findById(id)
   .then((data)=>res.json(data))
   .catch((error)=> res.json({ message: 'Error 400 Good Not Found'}))
 

  });



 //update a users
 router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, paterno, materno, alias, pertence, puesto, analista, f_reg, foto, estado, municipio } = req.body;
   userSchema
  .updateOne({ _id: id }, { $set: {nombre, paterno, materno, alias, pertence, puesto, analista, f_reg, foto, estado, municipio} })
  .then((data)=>res.json(data))
  .catch((error)=> res.json({ message: 'Error 400 Good Not Found'}))
  });
 


 //delete a users
 router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
   userSchema
  .remove({ _id: id })
  .then((data)=>res.json(data))
  .catch((error)=> res.json({ message: 'Error 400 Good Not Found'}))
  });
 

  module.exports = router;






