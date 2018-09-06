import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    clear,
    addTodo
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}

// action creator en ES6
// pour tester le module NPM Jest
function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    }
}
