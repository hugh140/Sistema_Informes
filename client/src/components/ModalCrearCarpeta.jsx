import { useEffect, useState } from "react"
import { ENDPOINT } from "../constants/endpoints"

function ModalCrearCarpeta({children}) 
{
    const [nombreCarpeta, setNombreCarpeta] = useState('')
    const [alerta, setAlerta] = useState('')

    function handleClick(e) {
        if (!nombreCarpeta) return

        fetch(ENDPOINT.CREAR_CARPETA + `crear?ing=${nombreCarpeta}`, {
            method: 'POST',
            credentials: 'include'
        })
        .then(response => response.json())
        .then(result => {
            if (result.pass) location.reload()
            setAlerta(result)
        })
        .catch(error => console.log('error', error));
    }

    const handleChange = e => setNombreCarpeta(e.target.value)

    return (
        <div className="modal fade" id="crearModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Creación de Carpeta</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <label htmlFor="inputCarpeta" className="form-label">Nombre de la carpeta:</label>
                        <br />
                        <input 
                            onChange={handleChange} 
                            type="text" 
                            id="inputCarpeta" 
                            className="form-label w-100"
                            autoFocus    
                        />
                        <div className={"alerta-"+(alerta.pass ? 'ok' : 'error')}>
                            {alerta.mensaje}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="submit" onClick={handleClick} className="btn btn-primary">Crear Carpeta</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalCrearCarpeta