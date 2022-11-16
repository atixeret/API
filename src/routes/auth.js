const express = require('express');
const Usuario =  require("../models/auth");

const router = express.Router();

const salt= (x)=> `contraseña-super-segura${x}`

const compare = (x, y) => salt(x) === y

router.post("/login", async (req, res, next)=>{
    const [usuario] = await Usuario.find({correo:req.body.email});
    if (usuario && compare(req.body.password, usuario.password)){
        return res.status(200).send({mensaje: "Esta logeado"})
    }
    res.status(404).send({mensaje:'No se encontro Usuario'})
})


router.post ("/register", async (req, res, next)=>{
    const newUser= {
        email : req.body.email,
        password :salt (req.body.password),
        nombre : req.body.nombre,
        id: req.body.id,
        privilegios : req.body.privilegios,
        area : req.body.area,
    };
    const usuarioCreado = await Usuario.find({correo: newUser.correo})
    if (usuarioCreado.length >10 ){
        return res.status(400).send({mensaje:"Contacta al Adminstrador",usuario:usuarioCreado})
    }
    await Usuario.create(newUser);
    res.status(200).send({mensaje:'Usuario creado'})
})


module.exports=router;

    