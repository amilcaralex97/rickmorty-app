import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
