import { useEffect, useState } from "react"
import Cookies from 'universal-cookie'
import '../styles.css'

const cookies = new Cookies()

function Login() 
{
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState('')
    const [estado, setEstado] = useState('')

    useEffect(() => {
        fetch("http://localhost:3000/admin", {
            credentials: "include"
        })
        .then(response => response.ok)
        .then(result => {
            if (result) window.location.href = "http://localhost:4000/admin"
        })
        .catch(error => console.log('error', error));
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        if (!password || !usuario) {
            setAlerta({mensaje: 'Rellena los campos para continuar.'})
            setEstado(401)
            return
        }

        fetch(`http://localhost:3000/login?user=${usuario}&password=${password}`, {
            method: 'POST',
            redirect: 'follow'
        })
        .then(response => {
            setEstado(response.status)
            return response.json()
        })
        .then(result => {
            setAlerta(result)
            if (result.token) {
                cookies.set('SAITOKEN', result.token, {path: '/'})
                window.location.href = "http://localhost:4000/admin"
            }
        })
        .catch(error => console.log('error', error));
    }

    const handleChangeUser = e => setUsuario(e.target.value)
    const handleChangePass = e => setPassword(e.target.value)

    return (
        <main className="container">
        <div className="d-flex justify-content-center">
            <div className="p-5 login w-100">
                <h1 className="display-3 d-block mb-4 text-center">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Usuario:</label>
                        <input 
                            onChange={handleChangeUser} 
                            type="text" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña:</label>
                        <input 
                            onChange={handleChangePass}
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1" 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Ingresar</button>
                </form>
                <div className={`
                    ${estado === 200 ? 'alerta-ok' : 'alerta-error'} 
                    text-center mt-4`}
                >
                    {alerta.mensaje}
                </div>
            </div>
        </div>
        </main>
    )
}
export default Login