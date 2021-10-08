import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'

export const HeroesList = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher );


    return (
        <ul>
           {
               heroes.map((heroe) => {
                   return (
                       <li key={heroe.id}>
                            { heroe.superhero }
                       </li>
                   );
               })
           } 
        </ul>
    )
}
