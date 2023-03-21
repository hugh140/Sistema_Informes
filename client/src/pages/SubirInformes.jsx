import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ENDPOINT } from "../constants/endpoints"
import subirInforme from "../scripts/subirInformeAPI"
import detectarAlertas from "../scripts/detectarAlertas"
import { dragOver, 
    eliminarArchivo,
    fileListToArray } 
    from "../scripts/dragdropEvents"
import '../styles.css'

import DragAndDropBox from "../components/DragAndDropBox"
import DropDownMenu from "../components/DropDownMenu"
import NavBar from "../components/NavBar"
import Consola from "../components/Consola"

function SubirInformes() 
{
    const [files, setFiles] = useState([])
    const [alertas, setAlerta] = useState([])
    const [className, setClassName] = useState(null)
    const [ingenieros, setIngenieros] = useState([])
    const [selectIng, setSelectIng] = useState()
    const {ing} = useParams()

    useEffect(() => {
        fetch(ENDPOINT.CONSULTAR)
        .then(response => response.json())
        .then(data => setIngenieros(Object.values(data)))
        .catch(error => console.log(error))

        setSelectIng(ing)
    }, [])

    function submit(e) {
        e.preventDefault()

        const alertaConsola = detectarAlertas(files, selectIng)
        setAlerta([alertaConsola])
        if (alertaConsola.estado === 'error') return

        const data = subirInforme(e, files, selectIng)

        fetch(ENDPOINT.SUBIR + selectIng, {
            method: 'POST',
            body: data,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(data => {
            setFiles([])
            return setAlerta(data)
        })
        .catch(error => console.log(error))
    }
    
    const eliminarFile = e => setFiles(eliminarArchivo(e, files))
    const handleDragOver = e => setClassName(dragOver(e))
    const handleChangeBox = e => setFiles(e.target.files, files)
    const handleChangeSelect = e => setSelectIng(e.target.value)
    const handleDrop = e => {
        e.preventDefault()
        setClassName(null)
        setFiles(e.dataTransfer.files, files)
    }

    return (
        <main className="container">
        <NavBar />
        <form onSubmit={submit}>
            <DragAndDropBox 
                files={files} 
                className={className} 
                drop={handleDrop} 
                dragOver={handleDragOver} 
                change={handleChangeBox}
            />
            <br className="mt-3" />
            <h6 className="mb-3">Directorio a subir: {selectIng}</h6>
            <DropDownMenu 
                change={handleChangeSelect} 
                ing={ing} 
                ingenieros={ingenieros} 
            />
            <input className="btn float-end submit-btn" type="submit" value="Subir" />
        </form>

        <Consola 
            alertas={alertas} 
            files={Object.values(files)}
            eliminarArchivo={eliminarFile} />
        </main>
    )
}
export default SubirInformes