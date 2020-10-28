import React from 'react'
import { Route, Redirect} from 'react-router-dom';
import { sessionCheck } from '../actions/appAction'

const PubRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            sessionCheck() && restricted ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};

const PrivRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            sessionCheck() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    )
}

const PubUrls =[
    {path: "/", text: "Home",isActive: "",},
    {path: "/signup", text: "Join",isActive: ""},

]
const PrivUrls =[
    {path: "/", text: "About", isActive: ""},
    {path: "/dashboard", text: "Dashboard", isActive: ""},
    {path: "/profile", text: "Profile", isActive: ""},
]

export const Navi ={
    PubRoute,
    PubUrls,
    PrivRoute,
    PrivUrls
}