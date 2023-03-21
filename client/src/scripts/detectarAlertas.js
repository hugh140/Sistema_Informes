import { PESO, alertas, extensionesValidas } 
    from "../constants/constantesAlertas"

function detectarAlertas(archivos, ing) 
{
    if (!archivos.length) 
        return alertas.faltaArchivos

    else if (!detectarExtension(archivos)) 
        return alertas.extInvalida  

    else if (!detectarPeso(archivos))
        return alertas.pesoExagerado

    else if (ing === 'undefined')
        return alertas.selectorIng

    else return alertas.cargando
} 

function detectarPeso(archivos) 
{
    for (const archivo of archivos)
        if (archivo.size >= PESO)
            return false
    return true
}

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
export default detectarAlertas