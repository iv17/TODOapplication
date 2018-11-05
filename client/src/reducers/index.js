/* eslint eqeqeq: "off", curly: "error" */
import quotes from '../quotes.json';
import {getCurrentDate, getRandomItem} from '../helper';

const initState = {
    todos: [],
    isOpen: false,
    quote:  {},
    date: ''
}

const combinedReducers = (state = initState, action) => {
    switch (action.type) {
        case 'ON_LOAD':
            return {
                ...state,
                todos: action.payload,
                quote: getRandomItem(quotes),
                date: getCurrentDate()
            }
        case 'OPEN_MODAL':
            return {
                ...state,
                isOpen: true
            } 
        case 'CREATE_TODO':
            var newTODO = { id: state.todos.length + 1, content: action.payload, date: getCurrentDate() }
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

export default combinedReducers;
