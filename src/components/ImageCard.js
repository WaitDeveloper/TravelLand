import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'; 
import { actionTypes } from '../reducer';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  button:{
    color:"#ffff",
    background:"#03166B",
  },
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
});

export default function ImageCard({ place, checked }) {

  const [{city},dispatch] = useStateValue();
  const classes = useStyles();
  const history = useHistory();
  

  const setCity= () => {dispatch({
    type: actionTypes.SET_CITY,
    city: place,
    }
  )
  history.push('/more-info/'+place.title);
}


  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {place.description}
          </Typography>
        </CardContent>
        <Button onClick={setCity}
        className={classes.button} 
        variant = "outlined" 
        > 
        Conoce mas
        </Button>
      </Card>
    </Collapse>
  );
}
