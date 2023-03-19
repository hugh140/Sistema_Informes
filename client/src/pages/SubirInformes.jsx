import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ENDPOINT } from "../scripts/endpoints"
import subirInforme from "../scripts/subirInformeAPI"
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
        if (!files.length) {
            setAlerta([{
                mensaje: 'No se han subido archivos aún.',
                estado: 'error'
            }])
            return
        }
        else setAlerta([{
            mensaje: 'Subiendo los archivos...',
            estado: 'cargando'
        }])
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
    function changeBox(e) {
        fileListToArray(e.target.files)
    }
    function changeSelect(e) {
        setSelectIng(e.target.value)
    }
    function eliminarArchivo(e) {
        const newFiles = [...files]
        newFiles.splice(Number(e.target.dataset.eliminar), 1)
        setFiles(newFiles)
    }

    return (
        <main className="container">
        <NavBar />
        <h1 className="text-center display-3">SAIT</h1>
        <form onSubmit={submit}>
            <DragAndDropBox 
                files={files} 
                className={className} 
                drop={drop} 
                dragOver={dragOver} 
                change={changeBox}
            />
            <br className="mt-3" />
            <DropDownMenu 
                change={changeSelect} 
                ing={ing} 
                ingenieros={ingenieros} 
            />
            <input className="btn float-end submit-btn" type="submit" value="Subir" />
        </form>

        <Consola 
            alertas={alertas} 
            files={Object.values(files)}
            eliminarArchivo={eliminarArchivo} />
        </main>
    )
}
export default SubirInformes