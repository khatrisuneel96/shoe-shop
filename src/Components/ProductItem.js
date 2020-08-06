import React from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Shoes from '../shoes.json'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: 20,
      margin: 'auto',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        marginBottom: 10
    },
    grid: {
        marginBottom: 50
    }
}));

function ProductItem() {
    let { id } = useParams();
    const shoe = Shoes[id]

    const classes = useStyles();

    if (!shoe) {
        return <h3>Product Not Found!</h3>
    }

    return (
        
        <div>
            <h1>Items</h1>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={4} className={classes.grid}>                               
                    <img className={classes.img} alt={shoe.name} src={shoe.img} />
                        <Typography gutterBottom variant="h4" color="textPrimary">{shoe.name}</Typography>
                    </Grid> 
                </Grid>
            </div>
        </div>
    )
}

export default ProductItem
