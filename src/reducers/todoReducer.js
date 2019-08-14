const initState = [
    {
        name:'illo est ratione doloremque quia maiores aut',
        description:'illo est ratione doloremque quia maiores aut' +
            'illo est ratione doloremque quia maiores aut'
    },
    {
        name:'repellendus sunt dolores architecto voluptatum',
        description:'repellendus sunt dolores architecto voluptatum' +
            'repellendus sunt dolores architecto voluptatum'

    },
    {
        name:'repellendus sunt dolores architecto voluptatum',
        description:'repellendus sunt dolores architecto voluptatum' +
            'repellendus sunt dolores architecto voluptatum'

    }
]

export const todoReducer = (state=initState,{type,payload}) =>{
    switch(type)
    {
        case 'ADD_TODO':
            return state.concat(payload);
        case 'DELETE_TODO':
            return state.filter((todo,index)=>index!==payload);
        default:
            return initState;
    }
}