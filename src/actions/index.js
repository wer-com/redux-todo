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