import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../Routes/AppRoutes';
import Global from './styles/global';

const App = () => {
  return (
    <div>
      <Global />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
