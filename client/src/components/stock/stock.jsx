import { useStyles } from "./style"
import { useSelector } from "react-redux";

const Stock = () => {

    const classes = useStyles();
    const users = useSelector((state) => state.users);
     const products = useSelector((state) => state.products);
    return (
     
        <div className={classes.StockContainer}> 
             <div className={classes.stockUpperPart}>
                 <div className={classes.users}>
                 <h2 className={classes.heading1}>{users.length}</h2>
                   <label style={{color:'white'}}>USERS</label>
                 </div>
                 <div className={classes.Products}>
                 <h2 className={classes.heading1}>{products.length}</h2>
                 <label style={{color:'white'}}>Product Added</label>
                 </div>
                 </div>
            </div>
        
    )
}

export default Stock
