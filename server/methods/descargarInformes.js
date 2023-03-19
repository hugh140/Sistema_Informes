const fs = require('fs')

module.exports = function descargarInformes(req, res, dirInformes) {
    //Dirección para verificar el archivo existente
    const dirArchivo = dirInformes+req.params.ing+'/'+req.params.archivo
    
    //Comprobar si el archivo existe para proceder a la descargar
    if (fs.existsSync(dirArchivo)) res.download(dirArchivo)
    else throw res.status(400).send('No existe el directorio.')
}