export const openModal = () => {
    return {
        type: 'OPEN_MODAL',
        payload: true
    }
};
export const create = (content) => {
    return {
        type: 'CREATE_TODO',
        payload: content
    }
};
