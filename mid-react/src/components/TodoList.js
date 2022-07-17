import React from "react"
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
        <div>
            <ul className="list-group">
            {
                props.items.map((item,index) =>
                    <TodoItem deleteItem={props.deleteItem} key={index} item={item}/>
                )
            }
            </ul>
            {
                props.items.length > 0
                ?
            <div>
                <button className='btn-outline-danger float-right btn-sm mt-3' onClick={props.clearItems}>Clear Todos</button>
            </div>
            :
            <label className="alert alert-warning align-items-center justify-content-center d-flex">Add a Todo to start!</label>
            }
        </div>
    )
}

export default TodoList;