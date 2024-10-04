// src/actions/index.js
export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};


export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    };
};

export const updateUser = (user) => {
    return {
        type: 'UPDATE_USER',
        payload: user
    };
};