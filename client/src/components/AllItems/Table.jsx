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
import { deleteProduct } from "../../redux/actiions/product";
import { useDispatch } from "react-redux";
import VerifiedIcon from '@mui/icons-material/Verified';
import ApproveProduct from "./ApproveProduct";
import Modal from "@mui/material/Modal";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const ItemTable = ({ setCurrentId, currentId }) => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const user = JSON.parse(localStorage.getItem("profile"));
  const status = JSON.parse(localStorage.getItem('paid'));

  const [open, setOpen] = React.useState(false);
  const [prodId,setProdId] =React.useState("");

  const handleOpen = (product) => {
    setOpen(true)
    setProdId(product._id)
  };

  const handleClose = () => setOpen(false);
  console.log("status",status)

  return (
    <>

      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ApproveProduct handleClose={handleClose}
         id={prodId}
        />
      </Modal>
    </div>

      {user?.result?.role === "agent" ? (
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
                  <b>Kg/U</b>
                </TableCell>
                <TableCell align="right">
                  <b>Warehouse</b>
                </TableCell>
                <TableCell align="right">
                  <b>Owner</b>
                </TableCell>
                <TableCell align="right">
                  <b>Phone</b>
                </TableCell>
                <TableCell align="right">
                  <b>email</b>
                </TableCell>
                <TableCell align="right">
                  <b>Price(FRW) </b>
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
              {products.map(
                (product) =>
                  user?.result?.email === product.email && (
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
                      <TableCell align="right">{product?.email}</TableCell>
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
                          onClick={() => setCurrentId(product._id)}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <HighlightOffIcon
                          style={{
                            cursor: "pointer",
                            color: "#2196f3",
                          }}
                          onClick={() => dispatch(deleteProduct(product._id))}
                        />
                      </TableCell>
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        user?.result?.role === "admin"|'cashier' && (
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
                  <b>Kg/U</b>
                </TableCell>
                  <TableCell align="right">
                  <b>Warehouse</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Owner</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Phone</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>email</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Price(FRW)</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Date</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Approve</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>status</b>
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
                    <TableCell align="right">{product.KgperUnity}</TableCell>
                    <TableCell align="right">{product.from}</TableCell>
                    <TableCell align="right">{product.owner}</TableCell>
                    <TableCell align="right">{product.phone}</TableCell>
                    <TableCell align="right">{product?.email}</TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <TableCell align="right">{product.createdAt}</TableCell>
                    <TableCell align="right">
                      <VerifiedIcon onClick={()=>handleOpen(product)}
                      style={{cursor:'pointer', color: "#2196f3"}}
                      />
                      </TableCell>
                      <TableCell align="right">{product?.status>-1?<AttachMoneyIcon style={{color:'#2196f3'}}/>:'Not Paid'}</TableCell>
                    <TableCell align="right">
                      <EditIcon
                        style={{
                          cursor: "pointer",
                          color: "#2196f3",
                          borderRadius: "50%",
                          border: "2px solid #2196f3",
                          padding: "2px",
                        }}
                        onClick={() => setCurrentId(product._id)}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <HighlightOffIcon
                        style={{
                          cursor: "pointer",
                          color: "#2196f3",
                        }}
                        onClick={() => dispatch(deleteProduct(product._id))}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      )}
    </>
  );
};

export default ItemTable;
