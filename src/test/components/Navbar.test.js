import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router-dom";
import { AutContext } from "../../auth/AuthContext";
import { Navbar } from "../../components/ui/Navbar";
import { types } from "../../types/type";

describe('Pruebas en <Navbar />', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    }

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: true,
            name:'Juan'
        }
    }
   
    const wrapper = mount(
        <AutContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AutContext.Provider>
    );
    
    afterEach(
        () => {
            jest.clearAllMocks();
        }
    );

    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim()).toBe('Juan');

    });
    
    test('debe de llamar el logout y usar el history', () => {
       
        const btn = wrapper.find('button').prop('onClick');
        btn();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        });

        expect( historyMock.replace ).toHaveBeenCalledWith('/login')


    });
    
    
});
