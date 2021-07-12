import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../fonts.css';
import '../knowledge/knowledge.css'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: 'auto',
      alignItems: 'center',
      backgroundColor: '#'
    },
    title: {
        textAlign: 'center',
        fontFamily: 'font-pl',
        
    },
    background: {
        padding: theme.spacing(3),
        margin: theme.spacing(2)
    },
    title:{
        justifyContent:'center',
        fontSize: '1.5rem',
        textShadow: '1px 1px 2px grey',
    },
    logos:{
        // backgroundColor: '#f7f6f5',
        alignItems: 'center',
        justifyContent: 'center',
        border: '0.1rem solid black',
        borderRadius: '20px',
        padding: '1rem'
    }

  }));


const KnowledgeComponent = ()=>{
    const classes = useStyles();

return (
    <>
    <div className={classes.background} >
    <Grid container className={classes.root}>
        <Grid xs={3} className={classes.title}>
            <h1 className="font-pl h1-style" >Herramientas</h1>
        </Grid>
    
    <Grid xs={9} container spacing={6} textAlign="center" className={classes.logos}>
        <Grid item>
            <img src="https://i.imgur.com/gEQIl3H.png" alt="html logo" width="100rem" />
        </Grid>
        <Grid item>
            <img src="https://i.imgur.com/ZRIHyCy.png" alt="css logo" width="100rem" />
        </Grid>
        <Grid item>
            <img src="https://i.imgur.com/5TwfDMt.png" alt="Javascript logo" width="100rem" />
        </Grid>
        <Grid item>
            <img src="https://i.imgur.com/33ywtzr.png" alt="git logo" width="100rem" />
        </Grid>
        <Grid item>
            <img src="https://i.imgur.com/jL9NC3b.png" alt="Jquery" width="100rem" />
        </Grid>
        <Grid item>
            <img src="https://i.imgur.com/HcGJlzD.png" alt="React logo" width="150rem" />
        </Grid>
        <Grid item>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png" alt="Firebease logo" width="150rem" />
        </Grid>
        <Grid item>
            <img src="https://i.imgur.com/IeNmUtm.png" alt="Illustrator logo" width="100rem" />
        </Grid>
        <Grid item>
            <img src="https://i.imgur.com/79HmSnj.png" alt=" Photoshop logo" width="100rem" />
        </Grid>
    </Grid>
    </Grid>
    </div>
    </>

)
}

export default KnowledgeComponent;