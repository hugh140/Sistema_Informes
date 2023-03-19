const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')

const consultarInformes = require('./methods/consultarInformes')
const consultarIngs = require('./methods/consultarIngs')
const descargarInformes = require('./methods/descargarInformes')
const subirInformes = require('./methods/subirInformes')

const app = express()
const dirInformes = __dirname + '/informes_tecnicos/'

app.use(cors({
    origin: '*'
}))
app.use(fileUpload({
    defCharset: 'utf8',
    defParamCharset: 'utf8'
}));

//Método get para consultar archivos del directorio
app.get('/consultar/:ing/:page', (req, res) => 
    consultarInformes(req, res, dirInformes))

//Método get para obtener nombres de ingenieros
app.get('/consultar', (req, res) => 
    consultarIngs(req, res, dirInformes))

//Método get para descargar archivos del directorio
app.get('/descargar/:ing/:archivo', (req, res) => 
    descargarInformes(req, res, dirInformes))

//Método post para subir archivos
app.post('/subir/:ing', (req, res) => 
    subirInformes(req, res, dirInformes))

app.listen(3000, () => 'Conectado en el puerto 3000')