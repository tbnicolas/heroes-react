import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import { HeroScreen } from "../../components/heroes/HeroScreen";


describe('Pruebas en <HeroScreen />', () => {
   
    const historyMock = {
        length: 10,
        goBack:jest.fn(),
        push: jest.fn()
    }

    
    test('debe de mostrar el componente redirect si no hay argumentos en el url', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={ historyMock } />
            </MemoryRouter>
        );
        expect( wrapper.find('Redirect').exists() ).toBe(true);
    });

    test('debe de mostrar un hero si el parametro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={HeroScreen} />
            </MemoryRouter>
        );
        
        expect( wrapper.find('.row').exists() ).toBe( true );
    });
     
    test('debe de regresar a la pantalla anterior con PUSH', () => {

        const historyMock = {
            length: 1,
            goBack:jest.fn(),
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId"
                    component={ (props) => <HeroScreen history={historyMock}/>} 
                
                />
            </MemoryRouter>
        );

        const btn = wrapper.find('button').prop('onClick');

        btn();

        expect( historyMock.push ).toBeCalledWith('/');
        expect( historyMock.goBack ).not.toBeCalledWith('/');

        
    });

    test('debe de regresar a la pantalla anterior con back', () => {
        const historyMock = {
            length: 12,
            goBack:jest.fn(),
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId"
                    component={ (props) => <HeroScreen history={historyMock}/>} 
                
                />
            </MemoryRouter>
        );

        const btn = wrapper.find('button').prop('onClick');

        btn();

        expect( historyMock.push ).not.toBeCalledWith('/');
        expect( historyMock.goBack ).toHaveBeenNthCalledWith(1);
    });

    test('debe de llamar el redirect si el hero no existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider123']}>
                <Route 
                    path="/hero/:heroeId"
                    component={ (props) => <HeroScreen history={historyMock}/>} 
                
                />
            </MemoryRouter>
        );

        expect( wrapper.text() ).toBe('');
    });
    
    
    
    
});
