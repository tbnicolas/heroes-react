import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';


import './heroes.css';

export const HeroesList = ({ publisher }) => {


    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);


    return (
        <div className="main-box animate__animated animate__fadeIn">
           {
               heroes.map((heroe) => {
                   return (
                       <HeroCard 
                            key={heroe.id}
                            { ...heroe }
                       >
                       
                       </HeroCard>
                       /* <div style={
                           {
                               height: 70,
                               width:70,
                               background: 'red',
                               margin: 20
                               
                           }
                       }>
                       </div> */
                   );
               })
           } 
        </div>
    )
}
