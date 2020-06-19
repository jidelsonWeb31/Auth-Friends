import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    // I could do that code below or I can do shorthand on the first line
    // const Component = component;
    const token = window.localStorage.getItem('token');
    return(
        <Route {...rest } render={props => {
            if(token) {
                return <Component {...props} />
            }
             else {
                return  <Redirect to ="/login" />;
            }
        }} />
    )
}

export default PrivateRoute;