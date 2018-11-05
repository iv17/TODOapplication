export const onLoad = () => {
    return {
        type: 'ON_LOAD'
    }
};
export const openModal = () => {
    return {
        type: 'OPEN_MODAL'
    }
};
export const create = (content) => {
    return {
        type: 'CREATE_TODO',
        payload: content
    }
};

export const remove = (id) => {
    return {
        type: 'REMOVE_TODO',
        payload: id
    }
};