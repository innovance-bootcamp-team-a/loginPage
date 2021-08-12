import React from "react";
import "regenerator-runtime/runtime";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainPage from "./components/MainPage";
import ChatPage from "./components/ChatPage";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <MainPage />
          </Route>
          <Route path="/rooms/:id?">
            <ChatPage />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

export default App;
