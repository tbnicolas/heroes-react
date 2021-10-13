import { shallow,mount } from "enzyme";
import { AutContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";


describe('Prueba en <AppRputer />', () => {
   
    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: false
        }
    }

    test('debe de mostrar el login si no está autenticado', () => {
       
        const wrapper = mount(
            <AutContext.Provider value={ contextValue }>
                <AppRouter />
            </AutContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        
    });
    
    test('debe de mostrar el componente de marvel si está autenticado', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user:{
                logged: true,
                name:'Juan'
            }
        }

        const wrapper = mount(
            <AutContext.Provider value={ contextValue }>
                <AppRouter />
            </AutContext.Provider>
        );

        expect( wrapper.find('.navbar').exists() ).toBe(true);
        
    });
    
});
 