const express = require("express");
const app = express();



//conexión con la base de datos

const getNombres = (request, response) => {
    results=['Henry', 'Moises', 'Mayool', 'Jose'];
    response.status(200).json(results);
};

//ruta
app.route("/nombres").get(getNombres);


const getApellidos = (request, response) => {
    results=['Perez', 'Garcia'];
    response.status(200).json(results);
};

//ruta
app.route("/apellidos").get(getApellidos);


const getCiudades = (request, response) => {
    results=['Atacames', 'Muisne', 'Quevedo'];
    response.status(200).json(results);
};

//ruta
app.route("/ciudades").get(getCiudades);

module.exports = app;