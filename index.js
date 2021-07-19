require('dotenv').config();
const path = require('path');

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');


// Crear el servidor de express
const app = express();

// Configurar CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Base de datos
dbConnection();

// Directorio público
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require('./routes/index'));
app.use( express.static('public') );

// Rutas

app.use('/api/mail', require('./routes/mail'));
app.use('/api/resetpass', require('./routes/resetpass'));


app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/item', require('./routes/item') );
app.use( '/api/school', require('./routes/school') );
app.use( '/api/section', require('./routes/sections') );
app.use( '/api/hospitales', require('./routes/hospitales') );
app.use( '/api/popular', require('./routes/popular') );
app.use( '/api/medicos', require('./routes/medicos') );
app.use( '/api/news', require('./routes/news') );
app.use( '/api/question', require('./routes/questions') );
app.use( '/api/todo', require('./routes/busquedas') );
app.use( '/api/login', require('./routes/auth') );
app.use( '/api/upload', require('./routes/uploads') );

// Lo último
app.get('*', (req, res) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
});


app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
});

