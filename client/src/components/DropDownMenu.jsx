import { useEffect, useState } from "react"

function DropDownMenu({change, ing, ingenieros}) 
{   
    return (
        <>
        <select 
            defaultValue='default' 
            className="form-select w-75 d-inline" 
            onChange={change}
        >
            <option value="default">
                Seleccionar carpeta...
            </option>
        {
            ingenieros.map(ingeniero => (
                <option 
                    key={ingeniero} 
                    value={ingeniero}
                >
                    {ingeniero}
                </option>
            ))
        }
        </select>
        </>
    )
}
export default DropDownMenu