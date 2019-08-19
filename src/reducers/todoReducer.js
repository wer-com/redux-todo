const initState = [
    {
        title:'illo est ratione doloremque quia maiores aut',
        description:'illo est ratione doloremque quia maiores aut' +
            'illo est ratione doloremque quia maiores aut',
        completed:false
    },
    {
        title:'repellendus sunt dolores architecto voluptatum',
        description:'repellendus sunt dolores architecto voluptatum' +
            'repellendus sunt dolores architecto voluptatum',
        completed:true

    },
    {
        title:'repellendus sunt dolores architecto voluptatum',
        description:'repellendus sunt dolores architecto voluptatum' +
            'repellendus sunt dolores architecto voluptatum',
        completed:false

    }
]

export const todoReducer = (state=initState,{type,payload}) =>{
    switch(type)
    {
        case 'ADD_TODO':
            return state.concat(payload);
        case 'DELETE_TODO':
            return state.filter((todo,index)=>index!==payload);
        case 'COMPLETED_TODO':
            return state.map((todo,index)=>index===payload?{...todo,completed:!todo.completed}:todo);
        default:
            return initState;
    }
}