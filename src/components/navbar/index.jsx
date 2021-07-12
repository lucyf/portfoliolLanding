import React, { useState } from 'react';
import '../fonts.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    margin: theme.spacing(0),
    fontSize: "1rem",
    padding: theme.spacing(0),
    color: 'white'
    
  },
  title: {
    flexGrow: 2,
    textAlign:"left",
    color: "white",

    },

  solidBackground: {
    // backgroundColor: '#d3cabe',
    backgroundColor: '#35495e',
    opacity: 0.9
  },
  transparentBackground: {
    backgroundColor: 'transparent'
  }

}));

const NavbarComponent = () =>{
  const classes = useStyles()
  const [background, setBackground] = useState('transparentBackground')
  const navRef = useRef()
  navRef.current = background

  useEffect(()=>{
    const handleScroll = () =>{
      const show = window.scrollY > 100
      if(show){
        setBackground('solidBackground')
      }else{
        setBackground('transparentBackground')
      }
    }
    document.addEventListener('scroll',handleScroll)
    return () =>{
      document.removeEventListener('scroll',handleScroll)
    }
  }, [])

  

    return(
        <>
    <div className={classes.root}>
      <AppBar position="fixed" style={{boxShadow:"none", alignItems: "top" }} className={classes[navRef.current]}>
        <Toolbar style={{alignItems: "top"}}>
          <div className={classes.title}>
            <h2 className="font-pl" >Lucia Fernandez Baker</h2>
          </div>
        
          <div className={classes.margin}>
            <Grid container spacing={2} style={{alignItems: "top"}}>
                <Grid item>
                <Link to={`/`} style={{textDecoration:"none"}}>
                  <IconButton edge="center" className={classes.menuButton} aria-label="menu">
                      Menu
                  </IconButton>
                </Link>
                </Grid>
                <Grid item>
                   <IconButton aria-label="contact" className={classes.menuButton}>
                      Contacto
                  </IconButton>
                </Grid>
                <Grid item  className={classes.menuButton}>
                    <a style={{display: "table-cell"}} target = "_blank" 
                    rel = "noopener noreferrer"href="http://linkedin.com/in/lucyfbaker/">
                        <img src="https://i.imgur.com/V3N88Nb.png" width="25rem"  alt="linkedin"/>
                    </a>  
                </Grid>
                <Grid item  className={classes.menuButton}>
                    <a style={{display: "table-cell"}} target = "_blank" 
                    rel = "noopener noreferrer"href="https://github.com/lucyf">
                        <img src="https://i.imgur.com/Ujnhmbq.png" width="25rem"  alt="github"/>
                    </a>
                </Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
    </div>

        </>
    )

}

export default NavbarComponent;