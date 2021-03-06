import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const UserRoute = ({component: Component, ...rest}) => {
    let username = JSON.parse(localStorage.getItem("username")),
        password = JSON.parse(localStorage.getItem("password"));

    if (!(username === null) &&
        !(password === null)) {
        return (
            <Route {...rest} render={()=> {return <Component/>}}/>
        )
    } else {
        return <Redirect to="/login" />
    }
};

export default UserRoute;
