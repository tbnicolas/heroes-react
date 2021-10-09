import React, { useContext } from 'react'
import { AutContext } from '../../auth/AuthContext';
import { types } from '../../types/type';

export const LoginScreen = ({ history }) => {
    
    const { user, dispatch } = useContext(AutContext);

    const handleClick = () => {

        //history.push('/');
        const action = {
            type: types.login,
            payload: {
                name: 'Nicolás',
            }
        }
        dispatch(action);
        history.replace('/');
    }
    
    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleClick }
            >
                Login
            </button>
        </div>
    )
}
