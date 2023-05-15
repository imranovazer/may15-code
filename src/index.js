import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

import App from './App';
import FormPage from './FormPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>

      </Route>
      <Route path='/form' element={<FormPage/>}>

      </Route>



    </Routes>
    </BrowserRouter>
    
   
  </React.StrictMode>
);

