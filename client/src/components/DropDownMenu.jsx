function DropDownMenu({change, ing, ingenieros}) 
{
    return (
        <select 
            value={ing} 
            className="form-select w-75 d-inline" 
            onChange={change}
        >
        {
            ingenieros.map(ing => (
                <option 
                    key={ing} 
                    value={ing}
                >
                    {ing}
                </option>
            ))
        }
        </select>
    )
}
export default DropDownMenu