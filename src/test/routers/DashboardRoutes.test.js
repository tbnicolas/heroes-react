import { mount } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import { AutContext } from "../../auth/AuthContext";
import { DashBoardRoutes } from "../../routers/DashBoardRoutes";



describe('Pruebas en <DashboardRoutes />', () => {
   /*  const props = {
        location: {
            pathname: '/marvel'
        },
        isAuthenticated : true,
        component: () => {
            <span>Hola Dashboard!</span>
        }
    } */
    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: true,
            name:'Juan'
        }
    }
    test('debe mostrarse correctamente', () => {
       
        const wrapper = mount(
            <AutContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashBoardRoutes /* {...props} *//>
                </MemoryRouter>
            </AutContext.Provider>
        );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim()).toBe('Juan');

    });
    


});
