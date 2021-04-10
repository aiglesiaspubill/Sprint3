//ARCHIVO QUE ME PERMITE CONECTARME A LA BASE DATOS

//MODULOS REQUERIDOS
const mongoose = require ('mongoose');

//URL A LA QUE ME CONECTO. MI BASE DE DATOS
const URI = 'mongodb+srv://Aitor:1234abc@cluster0.tafkc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//METODO PARA CONECTAR LA BASE
//Nos devuelve si esta conectada o no
mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));


//EXPORTAMOS EL MODULO MONGOOSE
module.exports = mongoose;



