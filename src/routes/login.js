const express = require("express");
const jwt = require("jsonwebtoken");
const userSchema =  require("../models/auth");

const router = express.Router();

router.get("/", (req , res) => {
    res.json({
        mensaje: "Nodejs and JWT"
    });
});

router.post("/login", (req , res) => {
    userSchema

    jwt.sign({userSchema}, 'secretkey', {expiresIn: '32s'}, (err, token) => {
        res.json({
            token
        });
    });

});

router.post("/posts", verifyToken, (req , res) => {

    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                    mensaje: "El usuario se Logeo con Token",
                    authData
                });
        }
    });
});

function verifyToken(req, res, next){
    const bearerHeader =  req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
         const bearerToken = bearerHeader.split(" ")[1];
         req.token  = bearerToken;
         next();
    }else{
        res.sendStatus(403);
    }
}
module.exports = router;