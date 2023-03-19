//Agregar las extensiones válidas a subir
const extensionesValidas = [
    '.pdf',
    '.docx',
    '.ocx',
    '.ocm'
]

function detectarExtension (archivos) 
{
    for (const archivo of archivos) {
        const lenNombreArchivo = archivo.name.length
        const arrayNombreArchivo = archivo.name.split('')
    
        let extension = []
        for (let i = lenNombreArchivo - 1; i >= 0; i--) {
            extension.push(arrayNombreArchivo[i])
            if (arrayNombreArchivo[i] === '.') break
        }
        let extensionRevisada = 0
        for (const ext of extensionesValidas) {
            if (ext.split('').reverse().toString() === 
                extension.toString()) 
                break
            extensionRevisada++
        }
        if (extensionRevisada === extensionesValidas.length)
            return false
    }
    return true
}
export default detectarExtension