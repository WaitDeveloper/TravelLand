import React from 'react'
import { useStateValue } from '../StateProvider';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, CardContent, Typography, Grid, Button} from '@material-ui/core';
import Navbar from "./Navbar";
import { useEffect, useState } from 'react';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Roboto Slab',
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
  media:{
    textAlign:'start',
    justifyContent: 'start',
    maxWidth: 645,
    margin:"20px"
  },
  ima:{
    height:"10%",
    width:"20%",
  },
  letter:{
    textAlign:"flex",
    fontFamily:"Roboto Slab",
    color:"#5AFF3D",
  },
  title2:{
    textAlign:"flex",
    fontFamily:"Roboto Slab",
    fontSize:"1rem",
  }
}));

const Ifuser = ({city,classes,sou}) =>{
  
  return(
    <>
    <div className={classes.container}>
      <h1 className={classes.title}>
        Bienvenido a <span className={classes.colorText}>{city.title}</span>
      </h1>
    </div>
        <Grid container component="main" sx={{heigh: "100px"}} >
          <Grid item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: city.imageUrl,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          >
            <img className={classes.media} src={city.imageUrl}/>
          </Grid>
          <Grid item xs={12} sm={8} md={5} elevation={6} square>
            <CardContent margin="1px">
            <Typography className={classes.letter}variant="h5" color="#03166B">
              <span className={classes.title}>Acerca de: </span> <br/>
              {city.description}
            </Typography>
            <Button href={sou}variant = "outlined" color="#FFFF" target="_blank" >
            Comprar Tickets
            </Button>
            </CardContent>
          </Grid>
        </Grid>
    </>
  )
}

const MoreInfo = () => {
    
    const [{city,user},dispatch] = useStateValue();
    const [checked, setChecked] = useState(false);
    var sou="https://www.despegar.com.co/vuelos/BOG/"+city.Des;
    useEffect(() => {
      setChecked(true);
    }, []);

    const classes = useStyles();
    return (
        <>
        <div className={classes.root} id="more-info">
      <Navbar />
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
      {
        !user ? 
        <div className={classes.container}>
        <h1 className={classes.title}>
          Por favor logueate para conocer mas sobre <span className={classes.colorText}>{city.title}</span>
        </h1>
        <Button href="/login" variant="outlined">
          Iniciar Sesion
        </Button>
        </div>: <Ifuser city={city} classes={classes} sou={sou}/>
      }
      </Collapse>
    </div>  
      </>
    )
}

export default MoreInfo
