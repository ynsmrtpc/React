import React from "react"

const TodoItem = (props) => {
    return (
        <li className="list-group-item"> 
            <button className='btn-danger btn-sm float-right' onClick={() => props.deleteItem(props.item)}>X</button>
            {props.item}
        </li>
    )
}


export default TodoItem;