import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PanelAdministrador from "../components/PanelAdministrador";

import { ENDPOINT } from "../constants/endpoints";

function AdminPage() 
{
    const [estado, setEstado] = useState()

    useEffect(() => {
        fetch(ENDPOINT.ADMIN, {
            credentials: "include"
        })
        .then(response => response.ok)
        .then(result => setEstado(result))
        .catch(error => console.log('error', error));
    }, [])

    return(
        <>
        <main className="container"> 
            <NavBar />
            {
                estado
                ?
                <PanelAdministrador /> 
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