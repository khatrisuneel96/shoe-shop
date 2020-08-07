import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom'

import Shoes from '../shoes.json'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      padding: 20,
      margin: 'auto',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '95%',
        maxHeight: '95%',
        marginBottom: 10
    },
    grid: {
        marginBottom: 50
    }
}));


function Products() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {Object.keys(Shoes).map((product,index) => {
                    const shoe = Shoes[product]
                    return (
                        <Grid item xs={12} sm={6} lg={4} key={index} className={classes.grid}>                               
                            <ButtonBase>
                                <Link to={`/products/${product}`}>
                                    <img className={classes.img} alt={shoe.name} src={shoe.img} />
                                </Link>
                            </ButtonBase>
                            <Typography gutterBottom variant="overline" color="textSecondary">{product.toUpperCase()}</Typography>
                            <Typography gutterBottom variant="h4" color="textPrimary">{shoe.name}</Typography>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Products
