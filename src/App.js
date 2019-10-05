import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './containers/Home/Home'

import { Helmet } from 'react-helmet'


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Online Reservation</title>
        <meta name="description" content="This is a online resstaurant reservation website built by wf with ReactJS & Firebase" />
      </Helmet>
      <Router >
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
