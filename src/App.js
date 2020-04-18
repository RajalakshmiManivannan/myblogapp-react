import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import CreateBlog from '../src/components/CreateBlog'
import DisplayBlog from './components/DisplayBlog';

function App() {
  return (
    <Provider store={store}>
      <Router>
    <div className="App">
        
        <CreateBlog/>
        <DisplayBlog/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
