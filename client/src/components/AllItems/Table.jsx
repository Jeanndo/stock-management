import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
 

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const ItemTable = ({handleOpen})=>{

   return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Product Name</b></TableCell>
            <TableCell align="right"><b>Quantity</b></TableCell>
            <TableCell align="right"><b>From</b></TableCell>
            <TableCell align="right"><b>Owner</b></TableCell>
            <TableCell align="right"><b>Owner Phone Number</b></TableCell>
            <TableCell align="right"><b>Price</b></TableCell>
            <TableCell align="right"><b>Date</b></TableCell>
            <TableCell align="right"><b>Edit</b></TableCell>
            <TableCell align="right"><b>Delete</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">date</TableCell>
              <TableCell align="right">
                <EditIcon style={{
                  cursor:'pointer',
                  color:'blue',
                  borderRadius:'50%',
                  border:'2px solid blue',
                  padding:'3px'
                  }}
                  onClick={handleOpen}
                  />
                  </TableCell>
              <TableCell align="right"><HighlightOffIcon style={{
                  cursor:'pointer',
                  color:'blue',
                  }}/>
                  </TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ItemTable