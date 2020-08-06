import React from 'react'
import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Shoes from '../shoes.json'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: 20,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    detail: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',


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
                    <Grid item xs={12} sm={6} >                               
                        <img className={classes.img} alt={shoe.name} src={shoe.img} />
                        
                    </Grid> 
                    
                    <Grid item xs={12} sm={6} className={classes.detail}>
                        <Typography gutterBottom variant="h3" color="textPrimary">{shoe.name}</Typography>
                        <Typography gutterBottom variant="body1" color="textSecondary" align='center' >{shoe.caption}</Typography>
                        
                        <Button variant="outlined" color="default">
                               Add to Cart
                           </Button> 
                        
                     </Grid>

                     
                    
                    

                </Grid>
            </div>
        </div>
    )
}

export default ProductItem
