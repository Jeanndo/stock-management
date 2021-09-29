import React from "react";
import { useStyles } from "./styles";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

const Payment = () => {
  const classes = useStyles();

  return (
      
    <div className={classes.payment}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
      <div className={classes.welcome}>
          <Typography>My products</Typography>
      </div>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          make payment
        </Typography>
      </Grid>
      </Grid>
    </div>
  );
};

export default Payment;
