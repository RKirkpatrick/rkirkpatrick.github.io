import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Layout from './Layout';

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </>
  );
}

export default App;
