import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { getUsers,deleteUser } from "../../redux/actiions/user";
import { useDispatch } from "react-redux";


const ItemTable = () => {

  const dispatch =  useDispatch();
  const users = useSelector((state) => state.users);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>First Name</b>
            </TableCell>
            <TableCell align="right">
              <b>Last Name</b>
            </TableCell>
            <TableCell align="right">
              <b>Phone</b>
            </TableCell>
            <TableCell align="right">
              <b>email</b>
            </TableCell>
            <TableCell align="right">
              <b>Role</b>
            </TableCell>
            <TableCell align="right">
              <b>Date</b>
            </TableCell>
            <TableCell align="right">
              <b>Delete</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right"> {user.lastName}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">
              {user.email}
            </TableCell>
              <TableCell align="right"> {user.role}</TableCell>
              <TableCell align="right">{user.createdAt}</TableCell>
              <TableCell align="right">
                <HighlightOffIcon
                  style={{
                    cursor: "pointer",
                    color: "#2196f3",
                  }}
                  onClick={()=>dispatch(deleteUser(user._id))}
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
