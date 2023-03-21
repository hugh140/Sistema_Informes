import ModalCrearCarpeta from "./ModalCrearCarpeta"
import ModarEliminarCarpeta from "./ModalEliminarCarpeta"
import LogOut from "./LogOut"

function PanelAdministrador(
    {ingenieros, isSelected, seleccionarCarpeta, eliminarCarpeta, handleEliminarCarpeta, 
        archivos = [], eliminarArchivo, handleEliminarArchivo, avanzarPagina, retrocederPagina,
        pagina}
    ) 
{
    return (
        <>
        <LogOut />
        <div className="row mt-3">
            <div className="col-md-6">
                <div className="position-relative">
                    <h5>Carpetas:</h5>
                    <div className="p-3 border border-secondary-subtle rounded scroll position-relative">
                        <form className="alert alert-light text-black d-flex file-delete">
                            <button 
                                className="btn float-btn add-dir" 
                                data-bs-toggle="modal" 
                                data-bs-target="#crearModal"
                                id="agregarCarpeta"
                                type="button"
                            >
                                <i className="fa-solid fa-plus"></i>
                            </button>
                            <ModalCrearCarpeta />
                            <label htmlFor="agregarCarpeta" className="ms-3 d-flex align-items-center cursor">
                                Agregar nueva carpeta.
                            </label>
                        </form>
                        {ingenieros.map((ing, index) => (
                            <div 
                                key={index} 
                                className={"alert alert-light text-black d-flex cursor " +
                                    (isSelected[index] === true ? 'folder-selected' : null)}
                                data-eliminar={ing}
                                onClick={seleccionarCarpeta}
                            >
                                <div 
                                    className="flex-grow-1 file-name"
                                    data-eliminar={ing}
                                >
                                    {ing}
                                </div>
                                <button 
                                    className="file-btn" 
                                    data-bs-toggle='modal'
                                    data-bs-target='#eliminarDir'
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
                                <ModarEliminarCarpeta handle={handleEliminarCarpeta} id='eliminarDir' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h5>Informes:</h5>
                <div className="p-3 border border-secondary-subtle rounded scroll">
                    <div className="text-black mb-3 w-auto position-relative py-3 d-flex">
                        <button onClick={retrocederPagina} className="btn float-btn position-absolute top-0 start-0">
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <div className="position-absolute top-50 start-50 translate-middle">
                            {pagina}
                        </div>
                        <button onClick={avanzarPagina} className="btn float-btn position-absolute top-0 end-0">
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                    {archivos.map((archivo, index) => (
                        <div key={index} className="alert alert-light text-black d-flex">
                            <div className="flex-grow-1 file-name">
                                {archivo.archivo}
                            </div>
                            <button 
                                className="file-btn" 
                                data-bs-toggle='modal'
                                data-bs-target='#eliminarInf'
                                data-archivo={archivo.archivo}
                                data-id={index}
                                onClick={eliminarArchivo}
                            >
                                <div 
                                    data-archivo={archivo.archivo}
                                    data-id={index}
                                >
                                    <i 
                                        className="fa-solid fa-trash"
                                        data-archivo={archivo.archivo}
                                        data-id={index}
                                    >
                                    </i>    
                                </div>
                            </button>
                            <ModarEliminarCarpeta handle={handleEliminarArchivo} id='eliminarInf' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}
export default PanelAdministrador