import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";


import * as serviceWorker from "./serviceWorker.js";
import { BaseCSS } from "styled-bootstrap-grid";

ReactDOM.render(
  <React.StrictMode>
    <BaseCSS />
    <App />
    </React.StrictMode>
 ,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
