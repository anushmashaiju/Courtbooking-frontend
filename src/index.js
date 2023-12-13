import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { store } from './Toolkit/store';
=======
>>>>>>> 5714c7c7a5537d8b33b1566ae30e76c7ade6f72f

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store }>
    <App />
    </Provider>
  </React.StrictMode>
);

