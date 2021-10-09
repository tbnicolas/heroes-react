import React, { useReducer } from 'react'
import { AutContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'


const init = () => {
 
    return JSON.parse(localStorage.getItem('user'))  || { logged: false };

}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);



    return (

        <AutContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AutContext.Provider>
    )
}
