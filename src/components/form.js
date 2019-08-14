import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../actions";

const Form = () =>{

    const dispatch = useDispatch();
    const [todoAdd,setTodoAdd]= useState({
        name:'',
        description:''
    });

    const inputHandler = e =>{
        const {name,value} = e.target;
        setTodoAdd({...todoAdd,[name]:value});
    }

    const submitHandler = e =>{
        e.preventDefault();
        dispatch(addTodo(todoAdd));
    }

    return(
        <div className="form">
            <form onSubmit={submitHandler}>
                <div>
                    <div>
                        <input
                            placeholder="name"
                            type="text"
                            name="name"
                            onChange={inputHandler}/>
                    </div>
                    <div>
                        <textarea
                            placeholder="description"
                            name="description"
                            onChange={inputHandler}></textarea>
                    </div>
                    <div className="input">
                        <button type="submit">add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default  Form;