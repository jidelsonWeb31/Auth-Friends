import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = (props) => {
    const Component = component;
    const token = window.localStorage.getItem('token');
    return(
        <Route {...props } render={() => {
            if(token) {
                return <Component />
            }
             else {

            }
        }} />
    )
}

export default PrivateRoute;