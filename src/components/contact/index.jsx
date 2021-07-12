import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import emailjs from 'emailjs-com';



const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow: 1,
    textAlign: "center",
    backgroundImage: "url('https://i.imgur.com/y5XFkfv.jpg')",
    backgroundSize: 'cover',
    padding: '3rem 1rem 3rem 1rem'
  },
  rightColumn:{
    justifyContent:'center'
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: 'auto'
    }
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(3)
  },
  button: {
    backgroundColor: "#ff2e4c",
    border: "none",
    borderRadius: "0.2rem",
    fontSize: "1.2rem",
    color:"#fff",
    padding: "0.5rem 1rem"
  }

}));

const ContactComponent = () =>{
  const classes = useStyles();

  const onsubmit = (e)=>{
    e.preventDefault();

    emailjs.sendForm('gmailLucifbaker', 'template_cdx27cm',e.target, 'user_MnNHJ9BInkbBdinoPfX9b')
      .then((result) => {
          alert('Tu mensaje ha sido enviado con exito. En breve te responderemos!');
      }, (error) => {
          alert(error.text, 'Tu mensaje no pudo ser enviado, intente nuevamente.');
      });
      e.target.reset()
  }
    return(
        <>
          <Grid container className={classes.root}>
            <Grid item xs={6}/>
            <Grid item xs={6} className={classes.rightColumn} >
            <form  noValidate autoComplete="off" onSubmit={onsubmit} >
            <Grid container spacing={4} className={classes.form} >
              <Paper  elevation={3} className={classes.paper}>
              <Grid  item xs={12}>
                <TextField required id="standard-required" label="Nombre/Identificación" variant="standard" style ={{width: '90%'}} name="name" />
              </Grid>
              <Grid item xs={12} >
                <TextField required id="standard-required" label="E-mail" variant="standard" name="email"  />
                <TextField required id="standard-required" label="Teléfono"  variant="standard" name="phone" />
              </Grid>
              <Grid item xs={12}>
                    <TextField
                        id="standard-multiline-static"
                        label="Mensaje"
                        multiline
                        rows={6}
                        variant="standard" 
                        style ={{width: '90%'}} 
                        name="message"
                    />
              </Grid>
              <Grid item xs={3}>
                    <button className={classes.button}>Enviar</button>                  
              </Grid>
              </Paper>
             </Grid>
             </form>
           
            </Grid>
        </Grid>

        </>
    )

}

export default ContactComponent;