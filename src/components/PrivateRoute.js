import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SecurityService from "../services/SecurityService";

const RotaPrivada = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    if (!SecurityService.isAutenticado()) {
      return <Redirect to={{ pathname: '/login',
        state: { from: props.location } }} />
    }

    return <Component {...props} />
  }}/>
);

export default RotaPrivada;