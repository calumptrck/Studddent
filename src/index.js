import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/Routes/Routes';
import './index.css';

ReactDOM.render((<BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes />
                  </BrowserRouter>
)               ,document.getElementById('root'));
