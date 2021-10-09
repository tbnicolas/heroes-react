import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { AutContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
  

export const AppRouter = () => {

    const { user } = useContext(AutContext);

    return (
        <Router>
          <div>
            
          {/* <Navbar /> */}

            <Switch>

              <PublicRoute isAuthenticated={user.logged} exact path="/login" component={ LoginScreen }/>

              <PrivateRoute isAuthenticated={user.logged} path="/" component={ DashBoardRoutes }/>
             
            </Switch>
          </div>
        </Router>
    );
}
