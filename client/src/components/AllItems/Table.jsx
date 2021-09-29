import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useSelector } from "react-redux";
import { getProducts,deleteProduct } from "../../redux/actiions/product";
import { useDispatch } from "react-redux";


const ItemTable = ({setCurrentId,currentId}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);

  console.log("id:", currentId);
   
  return (
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
              <b>From</b>
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
              <b>Edit</b>
            </TableCell>
            <TableCell align="right">
              <b>Delete</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.productName}
              </TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              <TableCell align="right">{product.from}</TableCell>
              <TableCell align="right">{product.owner}</TableCell>
              <TableCell align="right">{product.phone}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.createdAt}</TableCell>
              <TableCell align="right">
                <EditIcon
                  style={{
                    cursor: "pointer",
                    color: "#2196f3",
                    borderRadius: "50%",
                    border: "2px solid #2196f3",
                    padding: "2px",
                  }}
                  onClick={()=>setCurrentId(product._id)}
                />
              </TableCell>
              <TableCell align="right">
                <HighlightOffIcon
                  style={{
                    cursor: "pointer",
                    color: "#2196f3",
                  }}
                  onClick={()=>dispatch(deleteProduct(product._id))}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemTable;
