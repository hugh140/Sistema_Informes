const fs = require('fs')

module.exports = function consultarIngs(req, res, dirInformes) {
    const dirConsulta = dirInformes
    console.log(dirConsulta)
    fs.readdir(dirConsulta, (error, files) => {
        if (error) return res.status(400).send('El directorio no existe.')
        res.json(files)
    })
}