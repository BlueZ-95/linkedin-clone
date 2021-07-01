import React from 'react';
import './App.scss';
import Login from './components/Login.js';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feedbar from './components/Feedbar';
import Widgetbar from './components/Widgetbar';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feedbar />
        <Widgetbar />
      </div>
      {/* <Login /> */}
    </div>
  );
}

export default App;
