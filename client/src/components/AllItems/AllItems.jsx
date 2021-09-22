import React from "react";
import { Grid} from "@mui/material";
import ItemsTable from "./Table";
import AddItem from './Modal'

const AllItems = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
      
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AddItem
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          />
        </Grid>
        <Grid item xs={12}>
          <ItemsTable />
        </Grid>
      </Grid>
    </div>
    
  );
};
export default AllItems;
