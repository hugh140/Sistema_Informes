import { useState } from "react"
import { ENDPOINT } from "../scripts/endpoints"
import '../styles.css'

import DragAndDropBox from "../components/DragAndDropBox"

function SubirInformes() 
{
    const [files, setFiles] = useState([])
    const [alertas, setAlerta] = useState([])
    const [className, setClassName] = useState(null)

    function submit(e) {
        e.preventDefault()
        if (!files) {
            setAlerta([{
                mensaje: 'No se han subido archivos aún.',
                estado: 'error'
            }])
            return
        }
        const data = new FormData()
        console.log(files)
        
        for (let i = 0; i < files.length; i++)
            data.append('informe',files[i])

        fetch(ENDPOINT.SUBIR, {
            method: 'POST',
            body: data,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(data => setAlerta(data))
        .catch(error => console.log(error))
    }

    function fileListToArray(fileList) {
        const newFiles = [...files]
        Array.from(fileList).forEach(file =>
            newFiles.push(file))
        setFiles(newFiles)
    } 
    function dragOver(e) {
        e.preventDefault()
        setClassName('drag-over')
    }
    function drop(e) {
        e.preventDefault()
        setClassName(null)
        fileListToArray(e.dataTransfer.files)
    }
    function change(e) {
        fileListToArray(e.target.files)
    }

    return (
        <>
        <main className="container">
        <form onSubmit={submit}>
            <DragAndDropBox 
                files={files} 
                className={className} 
                drop={drop} 
                dragOver={dragOver} 
                change={change}
            />
            <br className="mt-3" />
            <input type="submit" value="Subir" />
        </form>
        
        {Object.values(alertas).map((alerta, index) => (
            <p 
                key={index} 
                className={`alerta-${alerta.estado}`
            }>
                {alerta.mensaje}
            </p>
        ))}
        </main>
        </> 
    )
}
export default SubirInformes