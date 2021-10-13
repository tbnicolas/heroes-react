import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroeByName } from '../../selectors/getHeroeByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();

    console.log('Se ejecuto location');

    const { q= '' } = queryString.parse(location.search);

    const initialForm = {
        search:q
    }

    const [ {search}, handleInputChange ] = useForm(initialForm);

    
    const handleSearch = ( e ) => {
        e.preventDefault();
        history.push(`?q=${ search }`);
    }
    
    const heroesFiltered = useMemo(() => getHeroeByName(q), [q]);
    

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className ="col-5">
                    <h4> Search Form </h4>
                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            name="search"
                            placeholder="Find your hero"
                            className="form-control"
                            value={ search }
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn mt-1 btn-outline-primary"
                            style={ { width: '100%' } }
                            >
                            Search...
                        </button>
                    </form>
                    
                </div>

                <div className ="col-7">
                    
                    <h4> Results </h4>
                    <hr/>

                    {
                        ( q==='')
                        &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    {
                        ( q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-info">
                            There is no a hero with {q}
                        </div>
                    }

                    {
                        heroesFiltered.map((heroe)=>(
                            <HeroCard 
                                key={ heroe.id }
                                {...heroe}
                            />
                        ))

                    }

                </div>


            </div>
        </div>
    )
}
