import { useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { ENDPOINT } from "../constants/endpoints"

function NavBar() 
{
    const [ingeniero, setIngeniero] = useState('')
    const {ing} = useParams()

    return (
        <div className="row text-center mt-3">
            <div className="col-md-4 p-1">
                <NavLink to='/'>
                    <div className="text-white py-3 ing-card h5">
                        Inicio
                    </div>
                </NavLink>
            </div>
            <div className="col-md-4 p-1">
                <NavLink to={'/subir/' + ing}>
                    <div className="text-white py-3 ing-card h5">
                        Subir Informes
                    </div>
                </NavLink>
            </div>
            <div className="col-md-4 p-1">
                <NavLink to='/login'>
                    <div className="text-white py-3 ing-card h5">
                        Administrador
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
export default NavBar