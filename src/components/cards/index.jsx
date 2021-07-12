import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: 320,
    margin: theme.spacing(2),
    flexWrap: "wrap"
  },
  media: {
    height: 160,
  },
  cardActions:{
      justifyContent: 'center'
  }
}));

const CardComponent = ({item}) =>{
    const classes = useStyles();
    return (
        <>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={item.img}
                title={item.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                   <strong>{item.title}</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button style={{display: "table-cell"}} target = "_blank" 
                    rel = "noopener noreferrer"href={item.site} size="small" color="primary">
                Ir al sitio
                </Button>
                <Button style={{display: "table-cell"}} target = "_blank" 
                    rel = "noopener noreferrer"href={item.repository} size="small" color="primary">
                     Repositorio
                </Button>
            </CardActions>
        </Card>
        </>

    )

}

export default CardComponent;