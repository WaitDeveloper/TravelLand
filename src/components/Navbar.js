import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar} from '@material-ui/core';
import { Login } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Logo from "../assets/Icono.png"
import { useStateValue } from '../StateProvider';
import { Logout } from '@mui/icons-material';
import { auth } from '../database/Firebase';
import { useHistory } from 'react-router';
import { actionTypes } from '../reducer';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Nunito',
    },
    appbar: {
      background: 'none',
    },
    appbarWrapper: {
      width: '80%',
      margin: '0 auto',
    },
    appbarTitle: {
      flexGrow: '1',
      font: 'Roboto Slab',
    },
    icon: {
      color: '#fff',
      fontSize: '2rem',
    },
    colorText: {
      color: '#5AFF3D',
    },
    container: {
      textAlign: 'center',
    },
    title: {
      color: '#fff',
      fontSize: '4.5rem',
    },
    goDown: {
      color: '#5AFF3D',
      fontSize: '4rem',
    },
    letter:{
      justifyContent:"end",
      fontFamily:"Roboto Slab",
      color:"#5AFF3D",
    }
  }));

function Navbar() {
    const classes = useStyles();
    const [{user},dispatch] = useStateValue();
    const history = useHistory();
    const iconRefresh = () =>{
      if(user){
        auth.signOut();
        alert("Se ha deslogueado con Exito!")
        dispatch({
          type:actionTypes.SET_USER,
          user: null,
        })
        history.push("/");
      }else{
        history.push("/login");
      }
    }
    return (
        <>
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
            <Link to="/">
            <img src={Logo} />
            </Link>
            <h1 className={classes.appbarTitle}>
                Travel<span className={classes.colorText}>Land</span>
            </h1>
            <h1 className={classes.letter} >
              {user ? user.email : ""}
            </h1>

            <IconButton onClick={iconRefresh}>
                {
                user ? <Logout className={classes.icon}/>  :<Login className={classes.icon} />
                }
            </IconButton>
            </Toolbar>
        </AppBar>  
        </>
    )
}

export default Navbar
