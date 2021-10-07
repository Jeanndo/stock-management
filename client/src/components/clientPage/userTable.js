import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { getProducts} from "../../redux/actiions/product";
import { useDispatch } from "react-redux";
import PayModal from "./Modal";
import { Button } from "@mui/material";
import {Link} from "react-router-dom"
import VerifiedIcon from '@mui/icons-material/Verified';

const UserTable = ()=>{

    const dispatch = useDispatch();
    const [user,setUser] = React.useState(JSON.parse(localStorage.getItem('profile')))
    
    React.useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
    
    const products = useSelector((state) => state.products);
    console.log("prod",products)

    return  (
      <>
        { user?.result?.role==='client'?(
          <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Product Name</b>
              </TableCell>
              <TableCell align="right">
                <b>Quantity</b>
              </TableCell>
              <TableCell align="right">
                <b>kg/U</b>
              </TableCell>
              <TableCell align="right">
                <b>WareHouse</b>
              </TableCell>
              <TableCell align="right">
                <b>Owner</b>
              </TableCell>
              <TableCell align="right">
                <b>Owner Phone Number</b>
              </TableCell>
              <TableCell align="right">
                <b>Price</b>
              </TableCell>
              <TableCell align="right">
                <b>Date</b>
              </TableCell>
              <TableCell align="right">
                <b>Pay</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              user?.result?.phone===product.phone&&(
                <TableRow
                key={product._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.productName}
                </TableCell>
                <TableCell align="right">{product.quantity}</TableCell>
                <TableCell align="right">{product.KgperUnity}</TableCell>
                <TableCell align="right">{product.from}</TableCell>
                <TableCell align="right">{product.owner}</TableCell>
                <TableCell align="right">{product.phone}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.createdAt}</TableCell>
                <TableCell align="right">{product?.approvedProducts>-1?<PayModal productId={product._id} />:<VerifiedIcon style={{color:'green'}}/>}</TableCell>
              </TableRow>
              )
            ))}
          </TableBody>
        </Table>
      </TableContainer>  
        ):(
          <>
          <div style={{textAlign:'center',color:'red'}}>
          <h2>Access Denied. This means you don't have permission to view this page!</h2>
          <Button variant="contained"color="primary"style={{color:'white'}}>
            <Link to="/">Go Back</Link>
          </Button>
         </div>
          </>
        )
      }
      </>
    )
}

export default UserTable