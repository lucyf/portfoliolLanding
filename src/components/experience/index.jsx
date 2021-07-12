import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../fonts.css';
import dataJSON from '../../projects.json';
import { useState } from 'react';
import CardComponent from '../cards';
import { Grid } from '@material-ui/core';
import './experience.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      alignItems: 'center',
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      marginBottom: theme.spacing(6),
      backgroundColor: "#f9bf24"
    },
    title:{
      justifyContent:'center',
      fontSize: '2.2rem'
    },
    cardContainer: {
      justifyContent: 'center',
    },
    cards: {
      display: "flex",
      justifyContent: 'center',
      alignItems: "center",
    }

  }));


const ExperienceComponent = ()=>{
    const [data] = useState(dataJSON)
    const classes = useStyles();
    
return (
    <>
    <div className={classes.root}>
     
       <Grid container spacing={2} className={classes.cardContainer} >
         <Grid item xs={9} className={classes.cards}>
         {data.map((card)=>{
                    return <Grid item key={card.id}>
                                  <CardComponent item={card}/>
                            </Grid>
                          
       })}
         </Grid>
       <Grid item xs={1} className={classes.title}>
          <h1 className="font-pl title-style">Proyectos</h1>
       </Grid>
       </Grid>
       <div>
       
     </div>

    </div>
    </>

)
}

export default ExperienceComponent;