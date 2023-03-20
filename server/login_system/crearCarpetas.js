const fs = require('fs')
const jwt = require('jsonwebtoken')

module.exports = function crearCarpeta(req, res, dirInformes) 
{
    const token = req.cookies.SAITOKEN
    console.log(token)
    try {
        const payload = jwt.verify(token, process.env.SECRET)
        
        //Verificar carpeta existente, o sino, crearla
        const dirCarpeta = dirInformes + req.query.ing
        if (!fs.existsSync(dirCarpeta))
            fs.mkdirSync(dirCarpeta)
        else return res.status(400).json({mensaje: 'La carpeta ya existe.'})

        return res.status(201).json({
            mensaje: 'Carpeta creada exitosamente.',
            pass: true
    })
    } 
    catch(e) {
        res.status(401).json({
            mensaje: 'Se ha presentado el siguiente error: ' + e + '. Intente recargando la página.'
        })
    }
}