export const addTodo = todoItem =>{
    return{
        type:'ADD_TODO',
        payload:todoItem
    }
}

export const deleteTodo = (todoId) => {
    return{
        type:'DELETE_TODO',
        payload:todoId
    }
}

export const completedTodo = (todoId) => {
    return{
        type:'COMPLETED_TODO',
        payload:todoId
    }
}

export const getData = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/todos/4')
            .then(response => response.json())
            .then(data => {
                // set state for success
                dispatch(addTodo(data));
            })
            .catch(error => {
                // set state for error
                console.log(error);
            })
    }
}