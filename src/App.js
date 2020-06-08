import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/navigation/Navbar";
import CharactersList from "./components/characters/CharactersList";
import Character from "./components/characters/Character";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={CharactersList} />
        <Route path="/character/:id" component={Character} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
