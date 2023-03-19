import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { ENDPOINT } from "../scripts/endpoints"

function NavBar() 
{
    const [ingeniero, setIngeniero] = useState('')

    useEffect(() => {
        fetch(ENDPOINT.CONSULTAR)
        .then(response => response.json())
        .then(data => setIngeniero(Object.values(data)[0]))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className="row text-center">
            <div className="col-md-4">
                <NavLink to='/'>
                    <div className="text-white py-3 ing-card h5">
                        Inicio
                    </div>
                </NavLink>
            </div>
            <div className="col-md-4">
                <NavLink to={'/subir/' + ingeniero}>
                    <div className="text-white py-3 ing-card h5">
                        Subir Informes
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
export default NavBar