/* eslint eqeqeq: "off", curly: "error" */
import quotes from '../quotes.json';
import {getCurrentDate0, getRandomItem, filterTODOs} from '../helper';

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
                todos: filterTODOs(action.payload),
                quote: getRandomItem(quotes),
                date: getCurrentDate0()
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
            /*let newTODOs = state.todos.filter(todo => {
              return todo.Id != action.payload.Id // ne !==
            });*/
            
            return {
              ...state,
              todos: filterTODOs(action.payload)
            }
        default:
            return state;
    }
}

export default combinedReducers;
