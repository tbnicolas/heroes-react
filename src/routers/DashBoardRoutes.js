import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashBoardRoutes = () => {
    return (
        <>
            
            <Navbar />

            <div>

                <Switch>

                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/heroe/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DcScreen } />

                    <Redirect to="/marvel" />

                </Switch>

            </div>
        </>
    )
}
