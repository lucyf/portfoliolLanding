import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './presentation.css';
import '../fonts.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      alingItems:'center',
      marginBottom:theme.spacing(3),
    },
    welcome: {
        backgroundColor: '#35495e ',
        color: 'white',
        padding: theme.spacing(5),
        display: 'flex',
        alignItems: 'center'      
    },
    about: {
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
  }));


const PresentationComponent = () =>{

 const classes = useStyles();
    
    return(
        <>
        <Grid container className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <img className="box-img" src="https://i.imgur.com/6MB6ziL.png" alt="" />
                </Grid>
                <Grid item xs={6} className={classes.welcome} >
                    <div>
                        <h1 className="font-pl title-font-size">Hola! Soy Lucia</h1>
                        <p className="p-font-size">¡Bienvenido a mi landing-page! Estoy emocionada por contarte un poco de mi, mis trabajos y lo que estuve aprendiendo en este tiempo. Espero que disfrutes el conocerme un poco más y podamos ponernos en contacto. </p>
                        <br/>
                        <Button variant="contained" color="secondary">Ver video</Button>
                    </div>
                </Grid>
            </Grid>
            <Grid container className={classes.about} >
                <h1 className="title-font-size font-pl">Acerca de mi</h1>
                <p className="p-font-size p-padding">Soy una entusiasta del aprendizaje. Por lo que en la mochila de la vida cargo con conocimientos de diseño (digitales y visuales) y habilidades manuales (coser, tejer, bordar, pintar, tocar instrumentos). 
                    <br/>
                En el <strong>desarrollo frontend</strong> he encontrado una forma de expresión de creatividad, construcción y creación que une la funcionalidad necesaria para una buena experiencia de usuario, con el diseño visual que atrae e invita a interactuar. 
                <br/>
                Seguir creciendo y aprendiendo más sobre desarrollo de software se ha convertido en un desafío que con gusto y con mucho entusiasmo he decidido afrontar.                 
                </p>

            </Grid>
        </Grid>
        </>
    )

}

export default PresentationComponent;