/* eslint eqeqeq: "off", curly: "error" */
import quotes from '../quotes.json';
import {getCurrentDate0, getRandomItem} from '../helper';

const initState = {
    todos: [],
    isOpen: false,
    quote: getRandomItem(quotes),
    date: getCurrentDate0()
}

const allReducers = (state = initState, action) => {
    switch (action.type) {
        case 'ON_LOAD':
            return {
                ...state,
                todos: action.payload
            }
        case 'OPEN_MODAL':
            return {
                ...state,
                isOpen: true
            } 
        case 'CREATE_TODO':
            var newTODO = action.payload;
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
              return todo.Id != action.payload.Id // ne !==
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
