import React from "react";
import { Grid } from "@mui/material";
import ItemsTable from "./Table";
import AddUserModel from "./Modal";

const AllUers = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AddUserModel
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </Grid>
        <Grid item xs={12}>
          <ItemsTable 
          handleOpen={handleOpen}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AllUers;
