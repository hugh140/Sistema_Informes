//Agregar las extensiones válidas a subir
const extensionesValidas = [
    '.pdf',
    '.docx',
    '.ocx',
    '.ocm'
]
const PESO = 5000000

const alertas = {
    faltaArchivos : {
        mensaje: 'No se han subido archivos aún.',
        estado: 'error'
    },
    extInvalida : {
        mensaje: 'Alguno de los archivos tiene una extensión inválida. Vuelve a subir',
        estado: 'error'
    },
    pesoExagerado : {
        mensaje: 'Alguno de los archivos tiene un peso mayor a 5mb. Vuelve a subir',
        estado: 'error'
    },
    cargando : {
        mensaje: 'Subiendo los archivos...',
        estado: 'cargando'
    }
}
export {alertas, PESO, extensionesValidas}