//Agregar las extensiones válidas a subir
const extensionesValidas = [
    '.pdf',
    '.docx',
    '.ocx',
    '.ocm'
]

module.exports = function detectarExtension (nombreArchivo) {
    const lenNombreArchivo = nombreArchivo.length 
    const arrayNombreArchivo = nombreArchivo.split('')

    let extension = []
    for (let i = lenNombreArchivo - 1; i >= 0; i--) {
        extension.push(arrayNombreArchivo[i])
        if (arrayNombreArchivo[i] === '.') break
    }
    for (const ext of extensionesValidas)
        if (ext.split('').reverse().toString() === 
            extension.toString()) 
            return true
    return false
}