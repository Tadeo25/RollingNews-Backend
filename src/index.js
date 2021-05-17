import express from 'express';

//Creo una instancia de expression
const app = express();

//Creo puerto para ejecutar mi backend
const port = 4000;

app.listen(port, ()=>{
    console.log("I'm your backend " + port);
});