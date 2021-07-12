import './first-page.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';


const UseStyles = makeStyles(theme => ({
    spacing: {
        padding: theme.spacing(2),
        margin: theme.spacing(2)
    },
    card:{
        alignItems: "center",
        margin: theme.spacing(2),
    }
}))

const FirstPageComponent = () => {

const classes = UseStyles()


    return (
    <>
    <div className={ "first-page"}>
        
        <h1 className="m ">Bienvenido/Welcome</h1>
        <h5 className="m ">Elige tu idioma / Choose your language</h5>
        <Grid container spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
            
        >
            <Grid item className={classes.card}>
                <Link className="link-style"  to={`/spanish`}><Button variant="contained" color="secondary">Spanish</Button></Link>
            </Grid>
            <Grid item>
                <Link className="link-style" to={`/english`}><Button variant="contained" color="secondary">English</Button></Link>
            </Grid>
        </Grid>
    </div>
    </>
)

}

export default FirstPageComponent;