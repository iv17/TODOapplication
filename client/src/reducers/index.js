import quotes from '../quotes.json';
import {getCurrentDate, random_item} from '../helper';

const initState = {
    todos: [ 
        { id: 1, content: 'Pick up drycleaning' },
        { id: 2, content: 'Study for exam' },
        { id: 3, content: 'Drink beer' }
    ],
    isOpen: false,
    quote:  {},
    date: ''
}

const allReducers = (state = initState, action) => {
    switch (action.type) {
        case 'ON_LOAD':
            return {
                ...state,
                quote: random_item(quotes),
                date: getCurrentDate()
            }
        case 'OPEN_MODAL':
            return {
                ...state,
                isOpen: action.payload,
                quote: random_item(quotes),
                date: getCurrentDate()
            } 
        case 'CREATE_TODO':
            var newTODO = { id: state.todos.length + 1, content: action.payload }
            return {
               ...state,
               isOpen: false,
               //todos : [...state.todos, newTODO]
               todos: [
                ...state.todos.slice(0, 0),
                newTODO,
                ...state.todos.slice(0),
               ],
            }
        case 'REMOVE_TODO':
            let newTODOs = state.todos.filter(todo => {
              return todo.id != action.payload // ne !==
            });
            
            return {
              ...state,
              todos: newTODOs
            }
        default:
            return state;
    }
}

export default allReducers;
