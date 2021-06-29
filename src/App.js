import React from 'react';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feedbar from './components/Feedbar';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feedbar />
      </div>
    </div>
  );
}

export default App;
