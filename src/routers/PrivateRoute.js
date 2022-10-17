import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import useAuth from "../auth/useAuth";
import routes from '../helpers/routes';

export default function PrivateRoute({hasRole: role, ...rest}) {
  const {hasRole, isLogged} = useAuth();

    if(role && !hasRole(role)) return <Navigate to={routes.home} />

    if(!isLogged()) return <Navigate to={routes.login} />;

  return (
    <Route {... rest} />
  )
}


/* function PrivateRoute({chuldren}) {
  const auth = useAuth();
  return auth ? children : <Navigate to={routes.login}
} */