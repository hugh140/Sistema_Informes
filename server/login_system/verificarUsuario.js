require('dotenv').config()
const jwt = require('jsonwebtoken')

const TIEMPO_EXPIRACION = 60 * 5 // Expira en 5 minutos
const COOKIE_EXPIRACION = TIEMPO_EXPIRACION * 1000

module.exports = function verificarUsuario(req, res) {
    const {user, password} = req.query
    if (user === 'admin' &&
        password === '1234') 
    {
        const token = jwt.sign(
            {nombre: 'hugo'}, 
            process.env.SECRET,
            {expiresIn : TIEMPO_EXPIRACION})

        res.cookie('SAITOKEN', token, {
            maxAge: COOKIE_EXPIRACION
        }) 
        res.json({token: token})
    }
    else res.json({mensaje: 'Usuario o contraseña incorrectos.'})
}