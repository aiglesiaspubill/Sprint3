const express = require('express');
const router = express.Router();

const Entrenadores = require('../models/entrenadores');

router.get('/', async(req,res) =>{
    const entrenadores = await Entrenadores.find();
    res.json(entrenadores);
});


router.post('/', async (req, res) =>{
    const { nombre, apellido} = req.body;
    const entrenadores = new Entrenadores ({nombre, apellido});
    await entrenadores.save();
    res.json({status: 'Tarea guardada'});

});



module.exports = router;