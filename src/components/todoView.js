import React,{useEffect} from 'react';
import {useSelector} from "react-redux";
import {deleteTodo,getData,completedTodo} from "../actions";
import {useDispatch} from "react-redux";

const TodoView = () =>{

    const dispatch = useDispatch();
    const todoList = useSelector(state=>state)
        .map(({title,description,completed},index)=>(<div key={index} className={`todo-item`} onClick={()=>dispatch(completedTodo(index))}>
            <div className='x-close' onClick={()=>dispatch(deleteTodo(index))}>X</div>
            <div className={`name-div-${completed}`}><h3>{title}</h3></div>
            <div className="description-div">{description}</div>
        </div>));

    useEffect(()=>{
        dispatch(getData());
    },[])

    return(
        <div className="todo-container">
            <h2>List of todos</h2>
            <h4>Legend:</h4>
            <h5>Purple color means that your todo is done</h5>
            <h5>Pink color means that your todo is uncompleted</h5>
            <br/>
            <div className="todo-list">{todoList}</div>
        </div>
    )
}

export default TodoView;