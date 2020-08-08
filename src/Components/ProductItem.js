import React from 'react'
import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Shoes from '../shoes.json'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        padding: 15,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '90%',
        maxHeight: '90%',
    },
    detail: {
        margin: 'auto',
        display: 'block',
        maxWidth: '90%',
        maxHeight: '90%',
    },
    btn: {
        marginTop: 20,
        width: '30ch',
        backgroundColor: 'black',
        color: ['white'].join(','),
        '&:hover': {
            backgroundColor: 'rgba(17,17,17,.75)',
            borderColor: '#0062cc',
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: 'rgba(17,17,17,.75)',
            borderColor: '#005cbf',
          },
          '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(17,17,17,.75)',
          },
    },
}));

function ProductItem() {
    let { id } = useParams();
    const shoe = Shoes[id];

    const classes = useStyles();

    if (!shoe) {
        return <h3>Product Not Found!</h3>
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} >
                    <img className={classes.img} alt={shoe.name} src={shoe.img} />

                </Grid>

                <Grid item xs={12} sm={6} className={classes.detail}>
                    <Typography gutterBottom variant="inherit" color="textSecondary">{ id.toUpperCase() }</Typography>
                    <Typography gutterBottom variant="h3" color="textPrimary">{shoe.name}</Typography>
                    <Typography gutterBottom variant="body1" color="textSecondary" align='center' >{shoe.caption}</Typography>
                    
                    <Button variant="contained" color="primary" className={classes.btn} >
                        Add to Cart
                    </Button>
                    
                </Grid>
            </Grid>
        </div>  
    )
}

export default ProductItem
