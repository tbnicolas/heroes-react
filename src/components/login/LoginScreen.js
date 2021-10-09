import React, { useContext } from 'react'
import { AutContext } from '../../auth/AuthContext';
import { types } from '../../types/type';

export const LoginScreen = ({ history }) => {
    
    const { dispatch } = useContext(AutContext);



    const handleClick = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';
        
        const action = {
            type: types.login,
            payload: {
                name: 'Nicolás',
            }
        }
        dispatch(action);
        history.replace(lastPath);
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
