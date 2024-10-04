
// src/components/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, setUser, updateUser } from '../actions';

const Counter = () => {
    const count = useSelector(state => state.counter);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSetUser = () => {
        const newUser = { name: 'John Doe', age: 30 };
        dispatch(setUser(newUser));
    };

    const handleUpdateUser = () => {
        const updatedUser = { age: 31 };
        dispatch(updateUser(updatedUser));
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <h2>User: {user.name ? `${user.name}, Age: ${user.age}` : 'No user set'}</h2>
            <button onClick={handleSetUser}>Set User</button>
            <button onClick={handleUpdateUser}>Update User</button>
        </div>
    );
};

export default Counter;
