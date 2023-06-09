const express = require('express')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

const consultarInformes = require('./methods/consultarInformes')
const consultarIngs = require('./methods/consultarIngs')
const descargarInformes = require('./methods/descargarInformes')
const subirInformes = require('./methods/subirInformes')

const verificarUsuario = require('./login_system/verificarUsuario')
const administrador = require('./login_system/administrador')
const crearCarpeta = require('./login_system/crearCarpetas')
const eliminarCarpeta = require('./login_system/eliminarCarpeta')
const eliminarInforme = require('./login_system/eliminarArchivos')

const app = express()
const dirInformes = __dirname + '/informes_tecnicos/'
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: [
        'http://172.19.0.19:4000', 
        'http://localhost:4000', 
        'https://kit.fontawesome.com',
        'https://ka-f.fontawesome.com'
    ],
    credentials: true
}))
app.use(fileUpload({
    defCharset: 'utf8',
    defParamCharset: 'utf8'
}));
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

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

//-----LOGIN-----
app.post('/login', verificarUsuario)
app.get('/admin', administrador)

//-----Acciones Admin-----

//Crear carpetas
app.post('/carpeta/crear', (req, res) => 
    crearCarpeta(req, res, dirInformes))

//Eliminar carpetas
app.delete('/carpeta/eliminar', (req, res) =>
    eliminarCarpeta(req, res, dirInformes))

//Eliminar informes
app.delete('/informe/eliminar', (req, res) =>
    eliminarInforme(req, res, dirInformes))

app.listen(PORT, () => 'Conectado en el puerto ' + PORT)