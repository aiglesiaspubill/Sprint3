//ARCHIVO DEL SERVIDOR
//ARCHIVO DE EXPRESS Y NODE
//GRACIAS A ESTE ARCHIVO ARRANCAMOS EL SERVIDOR


//MODULOS REQUERIDOS
//EXPRESS para el servidor
const express = require('express');
//MORGAN para mostrar notificaciones en consola
const morgan = require('morgan');
//PATH para tener __dirname que nos marca nuestro ubicacion en la carpeta
const path = require('path');
//PEDIMOS LA PROPIEDAD MONGOOSE DESDE DATABASE
const {mongoose} = require('./database');

//EJECUTAR MODULOS Y GUARDARLOS
const app = express();


//SETTINGS (Configuracion)
app.set('port', process.env.PORT || 3000);

//MIDDLEWARES (Antes de llegar a las rutas)
//Morgan me permite ver cualquier peticion desde consola
app.use(morgan('dev'));
//Esto me permite verificar que el codigo es formato JSON
app.use(express.json());


//ROUTES (URL o rutas de nuestra aplicacion)
//Ruta para los entrenadores (donde quiero entrar y donde accedo)
app.use('/api/entrenadores', require('./routes/entrenadores.routes.js'));


//STATIC FILES (archivos estaticos, para que sepan donde estan)
//Aqui le indico a que direccion tiene que ir para abrir el html creado
//PATH JOIN une directorios y asi nos sirve en cualquier SO.
app.use(express.static(path.join(__dirname, 'public')));


//STARTING THE SERVER (Iniciar Servidor) (me saca el valor del puerto)
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});