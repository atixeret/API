const mongoose = require("mongoose");
//userSchema = cartelSchema
const cartelSchema = mongoose.Schema({
  idcartel: {
    type: Number,
    required: true,
  },
  cartel: {
    type: String,
    required: true,
  },
  celula: {
    type: String
  },
  alianza: {
    type: String
  },
});

module.exports = mongoose.model('cartele', cartelSchema, 'carteles');