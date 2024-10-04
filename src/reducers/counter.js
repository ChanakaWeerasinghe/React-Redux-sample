// src/reducers/counter.js
import { combineReducers } from 'redux';

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};


const user = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.payload;
        case 'UPDATE_USER':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default combineReducers({
    counter,
    user
});

