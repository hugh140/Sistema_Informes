function Consola({alertas, files = {}, eliminarArchivo}) 
{
    return (
        <div className="row">
            <div className="col-md-6">
                <h5 className="mt-5">Archivos:</h5>
                <div className="p-3 border border-secondary-subtle rounded scroll">
                    {files.map((file, index) => (
                        <div key={index} className="alert alert-light text-black d-flex file-delete">
                            <div className="flex-grow-1 file-name">
                                {file.name}
                            </div>
                            <button 
                                className="file-btn" 
                                onClick={eliminarArchivo}
                            >
                                <div>
                                    <i 
                                        className="fa-solid fa-trash"
                                        data-eliminar={index} 
                                    >
                                    </i>    
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-md-6">
                <h5 className="mt-5">Consola:</h5>
                <div className="p-3 border border-secondary-subtle rounded scroll">
                    {Object.values(alertas).map((alerta, index) => (
                        <p 
                            key={index} 
                            className={`alerta-${alerta.estado}`
                        }>
                            {alerta.mensaje}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Consola