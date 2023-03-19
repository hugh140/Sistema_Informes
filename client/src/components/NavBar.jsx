import { useParams, NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div className="row text-center">
            <div className="col-md-4">
                <NavLink to='/'>
                    <div className="text-white py-3 ing-card h5">
                        Inicio
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
export default NavBar