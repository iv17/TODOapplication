const initState = {
    isOpen: false
}

const allReducers = (state = initState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                isOpen: action.payload
            } 
        default:
            return state;
    }
}

export default allReducers;
