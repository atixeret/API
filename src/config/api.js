const express = require("express");
const userSchema =  require("../models/user");

fetch('http://localhost:3009/users', {
    method: 'POST',
    headers: {
        "Content-Type": "personas/json",
    },
    body: JSON.stringify({ id: '205', nombre: '123' })
})
.then(res => res.json())
.then(res=> {
      console.log(res);
});