const fs = require('fs')
const detectarExtension = require('../scripts/detectarExtension')

module.exports = function subirInformes(req, res, dirInformes) {
    //Verificar si no se ha subido ningún archivo
    if (!req.files || Object.keys(req.files).length === 0)
        throw res.status(400).send('No se ha subido ningún archivo aún.')

    //Verificar carpeta existente, o sino, crearla
    const dirCarpeta = dirInformes + req.params.ing
    if (!fs.existsSync(dirCarpeta))
        fs.mkdirSync(dirCarpeta)

    const informesArchivo = req.files.informe

    //Verificar si la extensión es correcta (solamente {.doc, .pdf})
    let archivosVerificados = []
    let alertaArchivos = []

    //Por si existen varios archivos
    if (informesArchivo.length) {
        for (const informe of informesArchivo) {
            //Detectar extensiones incorrectas
            if (!detectarExtension(informe.name)) {
                alertaArchivos.push({
                    mensaje: `El archivo ${informe.name} tiene una extensión inválida.`,
                    estado: 'error'
                })
                continue
            }
            //Limitar el peso de la subida de archivos a 5mb
            if (informe.size >= 5000000) {
                alertaArchivos.push({
                    mensaje: `El archivo ${informe.name} es demasiado pesado. Solo se aceptan archivos menores a 5MB.`,
                    estado: 'error'
                })
                continue
            }
            archivosVerificados.push(informe)
        }
    //Por si sólo existe un archivo
    } else {
        if (!detectarExtension(informesArchivo.name))
            alertaArchivos.push({
                mensaje: `El archivo ${informesArchivo.name} tiene una extensión inválida.`,
                estado: 'error'
            })
        //Limitar el peso de la subida de archivos a 5mb
        else if (informesArchivo.size >= 5000000) 
            alertaArchivos.push({
                mensaje: `El archivo ${informesArchivo.name} es demasiado pesado. Solo se aceptan archivos menores a 5MB.`,
                estado: 'error'
            })
        else archivosVerificados.push(informesArchivo)
    }

    //Mover archivos a ./informes_tecnicos/
    archivosVerificados.forEach(archivo => {
        const dirSubida = dirCarpeta + '/' + archivo.name
        archivo.mv(dirSubida, 'ut8', (error) => {
            if (error) throw res.status(500).json(error)
        })
        alertaArchivos.push({
            mensaje : `El archivo ${archivo.name} se ha subido correctamente`,
            estado: 'ok'
        })
    })
    res.json(alertaArchivos)
}