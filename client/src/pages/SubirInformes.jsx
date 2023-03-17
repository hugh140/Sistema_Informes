import { useState } from "react"

function SubirInformes() 
{
    const [files, setFiles] = useState({})

    function submit(e) {
        e.preventDefault()
        
        const data = new FormData()
        
        for (let i = 0; i < files.length; i++)
            data.append('informe',files[i])

        fetch('http://172.19.0.99:3000/subir/laura', {
            method: 'POST',
            body: data,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    return(
        <form onSubmit={submit}>
            <input type="file" onChange={e => setFiles(e.target.files)} multiple='multiple' />
            <input type="submit" value="Subir" />
        </form>
    )
}
export default SubirInformes