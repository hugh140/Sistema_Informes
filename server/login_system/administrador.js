require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = function inicio(req, res) {
    const token = req.cookies.SAITOKEN
    console.log(token)
    try {
        const payload = jwt.verify(token, process.env.SECRET)
        res.status(200).json({mensaje: 'Acceso concedido'})
    } catch(e) {
        res.status(401).json({mensaje: 'Se ha presentado el siguiente error: ' + e})
    }
}