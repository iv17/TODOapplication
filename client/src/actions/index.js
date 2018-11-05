const apiUrl = 'http://localhost:8080/api/todos';

const axios = require('axios');

export const onLoad = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
        .then(response => {
          dispatch(onLoadSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
};

export const onLoadSuccess = (todos) => {
    return {
        type: 'ON_LOAD',
        payload: todos
    }
};

export const openModal = () => {
    return {
        type: 'OPEN_MODAL'
    }
};

export const create = content => {
    return (dispatch) => {
      return axios.post(apiUrl, {'content': content} )
        .then(response => {
          dispatch(createSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
}; 

export const createSuccess = (content) => {
    return {
        type: 'CREATE_TODO',
        payload: content
    }
};

export const remove = id => {
    return (dispatch) => {
      return axios.delete(apiUrl + '/' + id)
        .then(response => {
          dispatch(removeSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
};

export const removeSuccess = (todos) => {
    return {
        type: 'REMOVE_TODO',
        payload: todos
    }
};