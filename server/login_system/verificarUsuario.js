require('dotenv').config()
const jwt = require('jsonwebtoken')

const TIEMPO_EXPIRACION = 60 * 30 // Expira en 30 minutos

module.exports = function verificarUsuario(req, res) {
    const {user, password} = req.query
    if (user === 'admin' &&
        password === '1234') 
    {
        const token = jwt.sign(
            {nombre: 'hugo'}, 
            process.env.SECRET,
            {expiresIn : '1h'})

        res.status(200).json({
            mensaje: 'Login exitoso.',
            token: token
        })
    }
    else res.status(401).json({mensaje: 'Usuario o contraseña incorrectos.'})
}