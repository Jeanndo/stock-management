import React from 'react'
import {useStyles} from './styles'

const Pricing = ()=>{

    const classes = useStyles()

    return (
    <div className={classes.pricingContainer}>
     <div className={classes.firstCard}>
           <h2 className={classes.CardHeading}>5$ per day</h2>

         </div>   
         <div className={classes.secondCard}>
         <h2 className={classes.CardHeading}>3$ per day for more Products</h2>
         </div>
    </div>
    )
}

export default Pricing