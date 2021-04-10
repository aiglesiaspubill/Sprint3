const mongoose = require('mongoose');
const { Schema} = mongoose;

const EntrenadoresSchema = new Schema ({
    nombre: { type: String , required: true},
    apellido: { type: String , required: true}
});


module.exports = mongoose.model('Entrenadores', EntrenadoresSchema);