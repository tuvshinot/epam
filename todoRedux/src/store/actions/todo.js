import * as actionTypes from '../actionTypes';

export const addTodo = value => ({
    type: actionTypes.ADD_TODO,
    value
});

export const removeTodo = (e, idx) => {
    e.stopPropagation()
    return {
        type: actionTypes.REMOVE_TODO,
        idx
    }
};

export const isDoneToggle = idx => ({
    type: actionTypes.IS_DONE_TOGGLE,
    idx
});

