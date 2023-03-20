function ModarEliminarCarpeta({handle}) {
    return (
        <div className="modal fade" id="eliminarModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Alerta</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ¿Seguro que deseas eliminar?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={handle}    
                        >Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModarEliminarCarpeta