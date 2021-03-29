import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Layout/Partials/Header';
import Footer from './Layout/Partials/Footer';
import NotFound from './Layout/NotFound';
import About from './Layout/About';
import Contact from './Layout/Contact';

function App() {
  return (
    
    <div className="App">
      <Header />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <About />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
      <p className="warning aligncenter">This website is under construction: Some pages may be missing information.</p>
    </div>
  );
}

export default App;
