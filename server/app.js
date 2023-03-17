const express = require('express')
const fileUpload = require('express-fileupload')
const detectarExtension = require('./scripts/detectarExtension')
const fs = require('fs')
const cors = require('cors')
const { extname } = require('path')

const app = express()
app.use(cors({
    origin: '*'
}))
app.use(fileUpload({
    defCharset: 'utf8',
    defParamCharset: 'utf8'
}));

//Método get para consultar archivos del directorio
app.get('/consultar/:ing/:page', (req, res) => 
{
    //Dirección del directorio para la consulta
    const dirConsulta = __dirname + '/informes_tecnicos/' + req.params.ing
    let archivos = []

    //Consultar el directorio
    fs.readdir(dirConsulta, (error, files) => {
        if (error) return res.status(400).send('El directorio no existe.')

        const numeroPagina = Number(req.params.page)
        const paginaInicio = (numeroPagina - 1) * 20
        const limitePagina = numeroPagina * 20

        //Sistema de paginación para colapsar las consultas
        for (let i = paginaInicio; i < limitePagina; i++) {
            if (files[i]) { 
                const dirArchivo = dirConsulta + '/' + files[i]
                const dateArchivo = fs.statSync(dirArchivo).birthtime
                const extArchivo = extname(dirArchivo)
                archivos.push({
                    archivo: files[i],
                    fecha: dateArchivo,
                    extension: extArchivo
                })
            }
            else break
        }
        if (archivos.toString()) res.json(archivos)
        else res.status(404).json('No existen archivos en esta página.')
    })
})

//Método get para obtener nombres de ingenieros
app.get('/consultar', (req, res) => 
{
    const dirConsulta = __dirname + '/informes_tecnicos'
    fs.readdir(dirConsulta, (error, files) => {
        if (error) return res.status(400).send('El directorio no existe.')
        res.json(files)
    })
})

//Método get para descargar archivos del directorio
app.get('/descargar/:ing/:archivo', (req, res) => 
{
    //Dirección para verificar el archivo existente
    const dirArchivo = __dirname + '/informes_tecnicos/'+req.params.ing+'/'+req.params.archivo
    
    //Comprobar si el archivo existe para proceder a la descargar
    if (fs.existsSync(dirArchivo)) res.download(dirArchivo)
    else throw res.status(400).send('No existe el directorio.')
})

//Método post para subir archivos
app.post('/subir/:ing', (req, res) => 
{
    //Verificar si no se ha subido ningún archivo
    if (!req.files || Object.keys(req.files).length === 0)
        throw res.status(400).send('No se ha subido ningún archivo aún.')

    //Verificar carpeta existente, o sino, crearla
    const dirCarpeta = __dirname + '/informes_tecnicos/' + req.params.ing
    if (!fs.existsSync(dirCarpeta))
        fs.mkdirSync(dirCarpeta)

    const informesArchivo = req.files.informe

    //Verificar si la extensión es correcta (solamente {.doc, .pdf})
    let archivosVerificados = []
    let alertaArchivos = ''

    //Por si existen varios archivos
    if (informesArchivo.length) {
        for (const informe of informesArchivo) {
            //Detectar extensiones incorrectas
            if (!detectarExtension(informe.name)) {
                alertaArchivos += `El archivo ${informe.name} tiene una extensión inválida.\n`
                continue
            }
            //Limitar el peso de la subida de archivos a 5mb
            if (informe.size >= 5000000) {
                alertaArchivos += `El archivo ${informe.name} es demasiado pesado. Solo se aceptan archivos menores a 5MB.\n`
                continue
            }
            archivosVerificados.push(informe)
        }
    //Por si sólo existe un archivo
    } else {
        if (!detectarExtension(informesArchivo.name))
            alertaArchivos += `El archivo ${informesArchivo.name} tiene una extensión inválida.\n`
        //Limitar el peso de la subida de archivos a 5mb
        if (informesArchivo.size >= 5000000)
            alertaArchivos += `El archivo ${informesArchivo.name} es demasiado pesado. Solo se aceptan archivos menores a 5MB.\n`
        archivosVerificados.push(informesArchivo)
    }

    //Mover archivos a ./informes_tecnicos/
    archivosVerificados.forEach(archivo => {
        const dirSubida = dirCarpeta + '/' + archivo.name
        archivo.mv(dirSubida, 'ut8', (error) => {
            if (error) throw res.status(500).send(error)
        })
        alertaArchivos += `\nEl archivo ${archivo.name} se han subido correctamente`
    })
    res.send(alertaArchivos)
})

app.listen(3000, () => 'Conectado en el puerto 3000')