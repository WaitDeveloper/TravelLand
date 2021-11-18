import { AppBar , Container, Toolbar, Typography } from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    mainfooter:{
        color: '#fff',
        background: 'none', 
    },
}))


export default function Footer() {
    const classes = useStyles();
    return (
        <AppBar className={classes.mainfooter} position="static" color="#fff">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 Universidad Tecnologica de Bolivar
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}