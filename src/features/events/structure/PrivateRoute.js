import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { useAppContext } from '../../../utils/AppContext';

const PrivateRoute = ({ component:Component, ...rest }) => {
  const { isAuth } = useAppContext();
    return (
      <Route
        {...rest}
        render={(props) => {
          return isAuth ? <Component /> : <Redirect to='/'/>
        }}
      />
    );
 
};

export default PrivateRoute;
