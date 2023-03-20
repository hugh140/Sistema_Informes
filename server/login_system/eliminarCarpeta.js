const fs = require('fs')
const jwt = require('jsonwebtoken')

module.exports = function crearCarpeta(req, res, dirInformes) 
{
    const token = req.cookies.SAITOKEN
    console.log(token)
    try {
        const payload = jwt.verify(token, process.env.SECRET)
        
        //Verificar carpeta existente, o sino, crearla
        const dirCarpeta = dirInformes + req.query.carpeta
        console.log(dirCarpeta)
        fs.rmSync(dirCarpeta, { 
            recursive: true, force: true 
        });

        return res.status(200).json({
            mensaje: 'Carpeta eliminada exitosamente.'
    })
    } 
    catch(e) {
        res.status(401).json({
            mensaje: 'Se ha presentado el siguiente error: ' + e + '. Intente recargando la página.'
        })
    }
}