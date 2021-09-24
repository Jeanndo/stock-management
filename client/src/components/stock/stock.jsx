import { Label } from "@mui/icons-material";
import { useStyles } from "./style"

const Stock = () => {

    const classes = useStyles();

    return (
     
        <div className={classes.StockContainer}> 
             <div className={classes.stockUpperPart}>
                 <div className={classes.users}>
                 <h2 className={classes.heading1}>123444</h2>
                <label style={{color:'white'}}>USERS</label>
                 </div>
                 <div className={classes.Products}>
                 <h2 className={classes.heading1}>123521</h2>
                 <label style={{color:'white'}}>New Product Added</label>
                 </div>
                 </div>
            </div>
        
    )
}

export default Stock
