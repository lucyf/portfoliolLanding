import { makeStyles } from '@material-ui/core/styles';
import '../fonts.css'

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: '#374a5d',
        color: 'white',
        textAlign: 'center',
    },
    text:{
        margin: 'unset',
        padding: '1rem',
        fontFamily: 'Roboto, sans-serif'
    }
}))

const FooterComponent = ()=>{
    const classes = useStyles();
    
    return(
        <>
        <div className={classes.root}>
            <h4 className={classes.text}> Sitio web creado por Lucia Fernandez Baker 2021</h4>
        </div>

        </>
    )
}

export default FooterComponent;