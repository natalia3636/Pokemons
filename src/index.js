import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer texto="Direitos reservados Natália e Bruna" />
  </React.StrictMode>,
  rootElement
);
