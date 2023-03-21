import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PanelAdministrador from "../components/PanelAdministrador";

import { ENDPOINT } from "../constants/endpoints";

function AdminPage() 
{
    const [estado, setEstado] = useState()
    const [ingenieros, setIngenieros] = useState([])
    const [idIng, setIdIng] = useState()
    const [isSelected, setIsSelected] = useState()
    const [numPage, setNumPage] = useState(1)
    const [archivos, setArchivos] = useState([])
    const [idArchivo, setIdArchivo] = useState()
    const [indexArchivo, setIndexArchivo] = useState()

    useEffect(() => {
        fetch(ENDPOINT.ADMIN, {
            credentials: "include"
        })
        .then(response => response.ok)
        .then(result => setEstado(result))
        .catch(error => console.log('error', error));
    }, [])

    useEffect(() => {
        fetch(ENDPOINT.CONSULTAR)
        .then(response => response.json())
        .then(data => {
            setIngenieros(data)
            setIsSelected(Array(data.length).fill(null))
        })
        .catch(error => console.log(error))
    }, [])

    function handleClickCarpeta() {
        fetch(ENDPOINT.ELIMINAR_CARPETA + `?carpeta=${idIng}`, {
            method: 'DELETE',
            credentials: 'include'
        })
        .then(response => response.text())
        .then(result => location.reload())
        .catch(error => console.log('error', error));
    }
    function handleClickArchivo() {
        fetch(ENDPOINT.ELIMINAR_INFORME + `?informe=${idArchivo}&ing=${idIng}`, {
            method: 'DELETE',
            credentials: 'include'
        })
        .then(response => response.text())
        .then(result => {
            const nuevosArchivos = [...archivos]
            nuevosArchivos.splice(indexArchivo, 1)
            setArchivos(nuevosArchivos) 
        })
        .catch(error => console.log('error', error))
    }
    function seleccionarCarpeta(e) {
        const ingSelected = e.target.dataset.eliminar
        setIdIng(ingSelected)
        setIsSelected(ingenieros.map(ing => {
            return ingSelected === ing ? true : false
        }))
        fetch(ENDPOINT.CONSULTAR + `${ingSelected}/${numPage}`)
        .then(response => {
            if (response.ok)
                return response.json()
            else return []
        })
        .then(result => setArchivos(result))
        .catch(error => console.log(error));
    }
    const eliminarCarpeta = e => setIdIng(e.target.dataset.eliminar)
    const eliminarArchivo = e => {
        setIdArchivo(e.target.dataset.archivo)
        setIndexArchivo(e.target.dataset.id)
    }

    return(
        <>
        <main className="container"> 
            <NavBar />
            {
                estado
                ?
                <PanelAdministrador
                    ingenieros={ingenieros}
                    isSelected={isSelected}
                    seleccionarCarpeta={seleccionarCarpeta}
                    eliminarCarpeta={eliminarCarpeta}
                    handleEliminarCarpeta={handleClickCarpeta}

                    archivos={archivos}
                    eliminarArchivo={eliminarArchivo}
                    handleEliminarArchivo={handleClickArchivo}
                /> 
                : 
                <div className="alert alert-danger">
                    No está autorizado para controlar el panel.
                </div>
            }
        </main> 
        </>
    )
}
export default AdminPage