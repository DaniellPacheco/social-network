import * as React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter } from 'react-router-dom';
import App from './components/app';


ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);
