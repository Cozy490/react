import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import { Home } from "./features/home/Home";
import {useRoutes} from 'react-router-dom'
import router from './router/index'
import './App.css';

function App() {
  return (
    <div className="App">
      {useRoutes(router)}
    </div>
  );
}

export default App;
