//ARCHIVO DE LA RUTA DE ENTRENADORES
//OPERACIONES A TRAVES DE LAS URLS QUE LE VAMOS A DAR A NUESTRO SERVIDOR


//REQUIERO LOS MODULOS QUE NECESITO
const express = require('express');
//METODO ROUTER QUE ME DEVUELVE UN OBJETO
const router = express.Router();

//RECOJO EL MODELO DEFINIDIO DE ENTRENADORES y LO GUARDO EN CONST ENTRENADORES
const Entrenadores = require('../models/entrenadores');


//METODO GET PARA RECOGER TODOS LOS DATOS DE ENTRENADORES
router.get('/', async(req,res) =>{
    const entrenadores = await Entrenadores.find();
    res.json(entrenadores);
});


//METODO POST PARA AÑADIR ENTRENADORES
router.post('/', async (req, res) =>{
    const {nombre,apellido} = req.body;
    const entrenadores = new Entrenadores ({nombre, apellido});
    await entrenadores.save();
    res.json({status: 'Entrenador guardado'});

});

//METODO ACTUALIZAR PARA AÑADIR ENTRENADORES
router.put('/:id', async(req, res) =>{
    const {nombre,apellido} = req.body;
    const entrenadores = new Entrenadores ({nombre, apellido});
    await Entrenadores.findByIdAndUpdate(req.params.id, entrenadores);
    res.json({status: 'Entrenador modificada'});

});

//METODO ELIMINAR 
router.delete('/:id', async(req, res) =>{
    await Entrenadores.findByIdAndDelete(req.params.id);
    res.json({status: 'Entrenador eliminado'});

});


//EXPORTO ESTE MODULO PARA QUE LO VEAN
module.exports = router;