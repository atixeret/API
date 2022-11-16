const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      nombre: {
        type: String,
        required: true,
      },
      privilegios: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      area: {
        type: String,
        required: true,
      }

})

module.exports = mongoose.model('user', authSchema, 'user');