import { ENDPOINT } from "../constants/endpoints";
import Cookies from 'universal-cookie'

const cookies = new Cookies()

function LogOut()
{
    function handleLogOut() {
        location.href = 'http://localhost:4000'
        cookies.remove('SAITOKEN', { path: '/' })
    }

    return (
        <button 
            className="btn float-btn logout"
            onClick={handleLogOut}
        >
            <i className="fa-solid fa-right-from-bracket"></i>
        </button>
    )
}
export default LogOut