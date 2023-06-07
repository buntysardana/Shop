import React from 'react';
import { Route,  Navigate } from 'react-router-dom';

const RoleBasedRoute = ({
  component: Component,
  allowedRoles,
  userRole,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        allowedRoles.includes(userRole) ? (
          <Component {...props} />
        ) : (
          <Navigate to="/" />
        )
      }
    />
  );
};

export default RoleBasedRoute;
