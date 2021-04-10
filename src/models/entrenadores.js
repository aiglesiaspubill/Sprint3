//LOS MODELOS
//SON LOS ESQUEMAS DE CADA UNO DE LOS DATOS
//ESTE ES EL MODEL DE LOS ENTRENADORES


//MODULOS REQUERIDOS
const mongoose = require('mongoose');
//Metodo SCHEMA requerido desde mongose
const { Schema} = mongoose;

//DEFINO EL ESQUEMA DE MI JSON DE ENTRENADORES
const EntrenadoresSchema = new Schema ({
    nombre: { type: String , required: true},
    apellido: { type: String , required: true}
});


//EXPORTO EL MODELO, LO LLAMO Entrenadores Y LE PASO EL ESQUEMA EntrenadoresSchema
module.exports = mongoose.model('Entrenadores', EntrenadoresSchema);