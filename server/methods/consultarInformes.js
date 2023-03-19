const fs = require('fs')
const { extname } = require('path')

module.exports = function consultarInformes(req, res, dirInformes) {
    //Dirección del directorio para la consulta
    const dirConsulta = dirInformes + req.params.ing
    console.log(dirConsulta)
    let archivos = []

    //Consultar el directorio
    fs.readdir(dirConsulta, (error, files) => {
        if (error) return res.status(400).send('El directorio no existe.')

        const numeroPagina = Number(req.params.page)
        const paginaInicio = (numeroPagina - 1) * 20
        const limitePagina = numeroPagina * 20

        //Sistema de paginación para colapsar las consultas
        for (let i = paginaInicio; i < limitePagina; i++) {
            if (files[i]) { 
                const dirArchivo = dirConsulta + '/' + files[i]
                const dateArchivo = fs.statSync(dirArchivo).birthtime
                const extArchivo = extname(dirArchivo)
                archivos.push({
                    archivo: files[i],
                    fecha: dateArchivo,
                    extension: extArchivo
                })
            }
            else break
        }
        if (archivos.toString()) res.json(archivos)
        else res.status(404).json('No existen archivos en esta página.')
    })
}