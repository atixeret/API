  const express = require("express");
  const cartelSchema =  require("../models/cartel");

  const router = express.Router();

  router.get("/fichas/cartel", (req, res) => {
  res.render("cartel");
});


// create cartel
router.post("/cartels",async (req, res) => {
    const cartel = await cartelSchema.create(req.body);
    cartel
    .save()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({ message: 'Error 400 Good Not Found'}))
  });


  //get all cartels
  router.get("/cartels/", (req, res) => {
     cartelSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: 'Error 400 Good Not Found'}))
  });

//get a cartels
router.get("/cartels/:id", (req, res) => {
    const { id } = req.params;
     cartelSchema
   .findById(id)
   .then((data)=>res.json(data))
   .catch((error)=> res.json({ message: 'Error 400 Good Not Found'}))
 

  });



 //update a cartels
 router.put("/cartels/:id", (req, res) => {
  const { id } = req.params;
  const { idcartel, cartel, celula, alianza} = req.body;
   cartelSchema
  .updateOne({ _id: id }, { $set: {idcartel, cartel, celula, alianza} })
  .then((data)=>res.json(data))
  .catch((error)=> res.json({ message: 'Error 400 Good Not Found'}))
  });
 


 //delete a cartels
 router.delete("/cartels/:id", (req, res) => {
  const { id } = req.params;
   cartelSchema
  .remove({ _id: id })
  .then((data)=>res.json(data))
  .catch((error)=> res.json({ message: 'Error 400 Good Not Found'}))
  });
 

  module.exports = router;