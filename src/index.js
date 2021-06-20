import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./utilities/api/client";
import reportWebVitals from './reportWebVitals';
import { createProduct } from "./utilities/product/createProduct";

const newProduct = createProduct({ id: 12, code: "d f g", title: "This is the title of the product, it will be truncated" });

console.log("The new product is:", newProduct);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
