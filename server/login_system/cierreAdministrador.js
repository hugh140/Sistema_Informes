module.exports = function cierreAdministrador(req, res) {
    res.clearCookie('SAITOKEN')
    res.json({ mensaje: 'Cerrada la sesión.' })
}