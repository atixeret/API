const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id_ficha: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String
  },
  paterno: {
    type: String
  },
  materno: {
    type: String
  },
  alias: {
    type: String
  },
  pertence: {
    type: String
  },
  puesto: {
    type: String
  },
  estatus: {
    type: String
  },
  f_detencion: {
    type: String
  },
  foto: {
    type: String,
    required: true
  },
  f_reg: {
    type: String,
    required: true
  },
  analista: {
    type: String,
    required: true
  },
  caso: {
    type: String
    
  },
  CURP: {
    type: String
  },
  RFC: {
    type: String
  },
  Fec_Nac: {
    type: String
  },
  estado: {
    type: String
  },  
  municipio: {
    type: String
  }
});

module.exports = mongoose.model('Persona', userSchema, 'Personas');