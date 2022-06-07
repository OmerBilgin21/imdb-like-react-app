import React, {  useContext} from 'react'
import { Route, Navigate } from 'react-router-dom'
import { AuthContext } from './Ath'


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Route
        {...rest}
        render={routeProps =>
        !!currentUser ? (
            <RouteComponent {...routeProps}/>
        ) : (
            <Navigate to ={'/singIn'}/>
        )
        }
        />
    );
};

export default PrivateRoute