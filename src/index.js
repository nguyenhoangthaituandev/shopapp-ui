import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Home from './component/Home';
import styles from "./assets/css/Common.module.css";
import Order from './component/Order';
import OrderConfirm from './component/OrderConfirm';
import Login from './component/Login';
import Register from './component/Register';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <div className={styles.body}>
      <Register/>
    </div>
  </StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
