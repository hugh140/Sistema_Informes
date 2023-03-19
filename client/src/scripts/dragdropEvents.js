export function dragOver(e) {
    e.preventDefault()
    return 'drag-over'
}
export function eliminarArchivo(e, files) {
    const newFiles = [...files]
    newFiles.splice(Number(e.target.dataset.eliminar), 1)
    return newFiles
}
export function fileListToArray(fileList, files = []) {
    console.log(files)
    const newFiles = [...files]
    Array.from(fileList).forEach(file =>
        newFiles.push(file))
    return newFiles
}