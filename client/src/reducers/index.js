const initState = {
    todos: [ 
        { id: 1, content: 'Pick up drycleaning' },
        { id: 2, content: 'Study for exam' },
        { id: 3, content: 'Drink beer' }
    ],
    isOpen: false,
    //content: ''
}

const allReducers = (state = initState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                isOpen: action.payload
            } 
        case 'CREATE_TODO':
            var newTODO = { id: state.todos.length + 1, content: action.payload }
            return {
               ...state,
               isOpen: false,
               //content: '',
               //todos : [...state.todos, newTODO]
               todos: [
                ...state.todos.slice(0, 0),
                newTODO,
                ...state.todos.slice(0),
            ],
            }
        default:
            return state;
    }
}

export default allReducers;
