import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Login from './component/Login/Login'
import Seance from './component/Seance/Seance'
import useToken from './useToken';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import DAO from "./DAO";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
  const { token, setToken } = useToken();
  const classes = useStyles();
  
  if(!token) {
    console.log("in setToken bitch")
    return <Login setToken={setToken} />
  }

  const api = new DAO();
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            BricoSport
          </Typography>
          <div >
            <a className="menu" href="/dashboard">Dashboard</a>
            <a className="menu" href="/seance">Seance</a>
          </div>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/seance">
            <Seance />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
