const fs = require('fs')
const jwt = require('jsonwebtoken')

module.exports = function eliminarInforme(req, res, dirInformes) 
{
    const token = req.cookies.SAITOKEN
    try {
        const payload = jwt.verify(token, process.env.SECRET)
        
        const dirInforme = dirInformes + `${req.query.ing}/` + req.query.informe
        fs.unlinkSync(dirInforme)

        return res.status(200).json({
            mensaje: 'Informe eliminado exitosamente.'
        })
    } 
    catch(e) {
        res.status(401).json({
            mensaje: 'Se ha presentado el siguiente error: ' + e + '. Intente recargando la página.'
        })
    }
}