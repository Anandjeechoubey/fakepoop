import React from 'react';
import Navbar from './components/Navbar/'
import './App.css';
import LeftSideBar from './components/LeftSideBar/'
import Feed from './components/Feed/'
import Widgets from './components/Widgets';
import Login from './components/Login/'

function App() {
  const user = 'null';
  return (
    <div className="app">
      {!user? (
        <Login />
      ):(
        <>
        <Navbar/>
        <div className='app_body'>
          <LeftSideBar/>
          <Feed/>
          <Widgets/>
        </div>
        </>
      )}
        
      
    </div>
  );
}

export default App;
