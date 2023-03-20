import { useState, useEffect } from "react"
import { ENDPOINT } from "../constants/endpoints"
import ModalCrearCarpeta from "./ModalCrearCarpeta"
import ModarEliminarCarpeta from "./ModalEliminarCarpeta"
import LogOut from "./LogOut"

function PanelAdministrador() 
{
    const [ingenieros, setIngenieros] = useState([])
    const [idIng, setIdIng] = useState()
    console.log(idIng)

    useEffect(() => {
        fetch(ENDPOINT.CONSULTAR)
        .then(response => response.json())
        .then(data => setIngenieros(data))
        .catch(error => console.log(error))
    }, [])

    function handleClickDelete() {
        fetch(ENDPOINT.ELIMINAR_CARPETA + `/eliminar?carpeta=${idIng}`, {
            method: 'DELETE',
            credentials: 'include'
        })
        .then(response => response.text())
        .then(result => location.reload())
        .catch(error => console.log('error', error));
    }

    const eliminarCarpeta = e => setIdIng(e.target.dataset.eliminar)

    return (
        <>
        <LogOut />
        <div className="row mt-3">
            <div className="col-md-6">
                <div className="position-relative">
                    <h5>Carpetas:</h5>
                    <div className="p-3 border border-secondary-subtle rounded scroll position-relative">
                        {ingenieros.map((ing, index) => (
                            <div key={index} className="alert alert-light text-black d-flex file-delete">
                                <div className="flex-grow-1 file-name">
                                    {ing}
                                </div>
                                <button 
                                    className="file-btn" 
                                    data-bs-toggle='modal'
                                    data-bs-target='#eliminarModal'
                                    data-eliminar={ing}
                                    onClick={eliminarCarpeta}
                                >
                                    <div data-eliminar={ing}>
                                        <i 
                                            className="fa-solid fa-trash"
                                            data-eliminar={ing} >
                                        </i>    
                                    </div>
                                </button>
                                <ModarEliminarCarpeta handle={handleClickDelete} />
                            </div>
                        ))}
                    </div>
                    <button 
                        className="btn float-btn add-dir" 
                        data-bs-toggle="modal" 
                        data-bs-target="#crearModal">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                    <ModalCrearCarpeta />
                </div>
            </div>
            <div className="col-md-6">
                <h5>Informes:</h5>
                <div className="p-3 border border-secondary-subtle rounded scroll">
                    <div className="alert alert-light text-black d-flex file-delete">
                        <div className="flex-grow-1 file-name">
                            hola
                        </div>
                        <button 
                            className="file-btn" 
                            // onClick={eliminarArchivo}
                        >
                            <div>
                                <i 
                                    className="fa-solid fa-trash"
                                    // data-eliminar={index} 
                                >
                                </i>    
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default PanelAdministrador