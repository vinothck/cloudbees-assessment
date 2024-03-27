import * as React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

// views
import Users from './Users';
import UserDetail from './UserDetail';

const App = () => {
  const router = useRoutes([
    {
      path: '/',
      index: true,
      element: <Navigate to="/users" />,
      loader: 'loading...'
    },
    {
      path: '/users',
      index: true,
      element: <Users />,
      loader: 'loading...'
    },
    {
      path: '/user/*',
      index: false,
      element: <UserDetail />,
      loader: 'loading...'
    }
  ]);

  return (
    <React.Fragment>
      {router}
    </React.Fragment>
  )
}

export default App;