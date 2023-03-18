import { useState } from "react"

function DragAndDropBox({files ,className, drop, dragOver, change}) 
{
    return (
        <label 
            htmlFor="inputFile" 
            id='drag-drop-box' 
            className={className} 
            onDrop={drop} 
            onDragOver={dragOver} 
        >
            <div>
            <h1><i className="fa-solid fa-plus"></i></h1>
            {!files.length
                ? <h3>Sube o arrastra los archivos.</h3>
                : <h3>{files.length} archivos a subir.</h3>
            }
            <p>Solo se aceptan archivos pdf's y word <br />
                menores a 5mb</p>
            </div>
            <input 
                type="file" 
                id="inputFile"
                onChange={change} 
                multiple
            />
        </label>
    )
}
export default DragAndDropBox