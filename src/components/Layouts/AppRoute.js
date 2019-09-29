import React from 'react';
import {Route} from 'react-router-dom'; // Redirect
//import {getToken} from '../../utils/auth';

const AppRoute = ({component: Component, data: data, auth: auth, layout: Layout, ...rest}) => {
    return (
        <Route {...rest} render={props => {
            /*var authSession = getToken();
            if (auth && !authSession)
                return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>;
            else if (!auth && authSession)
                return <Redirect to={{pathname: '/'}}/>;
             */

            if(data===undefined)
                data = {};

            return <Layout><Component {...props} {...data} /></Layout>;
        }}/>
    );
};

export default AppRoute;
