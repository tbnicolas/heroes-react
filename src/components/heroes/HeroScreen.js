import React from 'react'
import { useParams,Redirect } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroeById';

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();

    const hero = getHeroesById( heroeId );

    if ( !hero ){
        return <Redirect to="/" />
    }

    const handleReturn = () => {

        //history.push('../');
        if ( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const {
        superhero,
        alter_ego,
        first_appearance,
        characters,
        publisher
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`} alt={superhero} className="img-thumbnail"/>
            </div>

            <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Aleter ego: </b>
                        { alter_ego }
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b>
                        { publisher }
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance: </b>
                        { first_appearance }
                    </li>
                </ul>
                <h5>Characters</h5>
                <p>{ characters }</p>
                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
