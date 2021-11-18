import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';
import Footer from './components/Footer';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import SignIn from './components/Login/Login';
import SignUp from './components/Login/Register';
import MoreInfo from './components/MoreInfo';
import { useStateValue } from './StateProvider';
import { auth } from './database/Firebase';
import { actionTypes } from './reducer';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  seccions:{
    backgroundImage:'url(https://source.unsplash.com/5bwgW8_9OPs/1200x900)',
  },
  info:{
    backgroundColor:"#ffff",
  }
}));


export default function App() {
  
  const [{city,user},dispatch] =useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    });
  },[])
  var pat="/more-info/"+city.title;
  const classes = useStyles();
  return (
    <Router>
    <div className={classes.root}>
    <Switch>
      <Route path={pat}>
        <CssBaseline/>
        <MoreInfo/>
      </Route>
      <Route path="/register">
        <div className={classes.seccions}>
        <CssBaseline/>
        <SignUp/>
        </div>
      </Route>
      <Route path="/login">
        <CssBaseline/>
        <SignIn/>
      </Route>
      <Route path ="/">
        <CssBaseline/>
        <Header/>
        <PlaceToVisit/>
      </Route>
    </Switch>
    <Footer/>
    </div>
    </Router>
  );
}