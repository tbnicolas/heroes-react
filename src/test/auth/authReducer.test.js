
import { authReducer } from '../../auth/authReducer';
import { types } from "../../types/type";


describe('Pruebas en authReducer', () => {
    const userState = {
        name:'Nicolás',
    }
  
    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({logged:false},{});

        expect( state ).toEqual( {logged:false} );

    });


    test('debe de autenticar y colocar el name del usuario', () => {
        
        const action = {
            type: types.login,
            payload: userState
        }

        const state = authReducer(userState,action);
        expect( state ).toEqual({...userState,logged:true});

    });
    

    test('debe de borra el name del usuario y logged en false', () => {
        const action = {
            type: types.logout,
            payload: userState
        }

        const state = authReducer({...userState,logged:true},action);
        expect( state ).toEqual({logged:false});
    });
    

});
