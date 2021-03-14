import React from 'react';
import Navbar from './components/Navbar/'
import './App.css';
import LeftSideBar from './components/LeftSideBar/'
import Feed from './components/Feed/'
import Widgets from './components/Widgets';
import Login from './components/Login/'
import Grid from '@material-ui/core/Grid'

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
          <Grid
            container
            direction="row"
            justify="center"
          >
            <Grid item  sm={0} md={3}>
              <LeftSideBar/>
            </Grid>
            <Grid item md={6}>
              <Feed/>
            </Grid>
            <Grid item md={3}>
              <Widgets/>
            </Grid>
          </Grid>
          
        </div>
        </>
      )}
        
      
    </div>
  );
}

export default App;
