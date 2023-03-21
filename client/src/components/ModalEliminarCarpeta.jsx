function ModarEliminarCarpeta({handle, id}) {
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Alerta</h1>
                    </div>
                    <div className="modal-body">
                        ¿Seguro que deseas eliminar?
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={handle}   
                            data-bs-dismiss="modal"
                        >   
                            Confirmar
                        </button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModarEliminarCarpeta