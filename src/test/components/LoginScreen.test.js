import { mount } from "enzyme";
import { AutContext } from "../../auth/AuthContext";
import { LoginScreen } from "../../components/login/LoginScreen";
import { types } from '../../types/type';


describe('Pruebas en <LoginScreen />', () => {
   
    const contextMock = {
        dispatch: jest.fn(),
        user:{
            name: 'Nicolás'
        }
    }

    const historyMock = {
        replace: jest.fn()
    }

    test('debe de mostrarse el componente correctamente', () => {
        const wrapper = mount(
            <AutContext.Provider value={ contextMock }>
                <LoginScreen history={historyMock}></LoginScreen>
            </AutContext.Provider>
        );
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe de realizar el dispatch y navegacion', () => {


        const wrapper = mount(
            <AutContext.Provider value={ contextMock }>
                <LoginScreen history={historyMock}></LoginScreen>
            </AutContext.Provider>
        );

        const action = {
            type: types.login,
            payload: {
                name: 'Nicolás',
            }
        }

        const btn = wrapper.find('button').prop('onClick');
        btn();

        expect(contextMock.dispatch).toHaveBeenCalledWith(action);
        expect(historyMock.replace).toHaveBeenCalledWith( expect.any(String) );

        localStorage.setItem('lastPath','/dc');
        btn();
        expect(historyMock.replace).toHaveBeenCalledWith('/dc');
        
    });
    
});
