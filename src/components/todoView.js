import React from 'react';
import {useSelector} from "react-redux";
import {deleteTodo} from "../actions";
import {useDispatch} from "react-redux";

const TodoView = () =>{

    const dispatch = useDispatch();
    const todoList = useSelector(state=>state)
        .map(({name,description},index)=>(<div key={index} onClick={()=>dispatch(deleteTodo(index))} className="todo-item">
            <div className="name-div"><h3>{name}</h3></div>
            <div className="description-div">{description}</div>
        </div>));
    return(
        <div className="todo-container">
            <h2>List of todos</h2>
            <div className="todo-list">{todoList}</div>
        </div>
    )
}

export default TodoView;