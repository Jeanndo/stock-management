import React from "react";
import { Grid} from "@mui/material";
import ItemsTable from "./Table";
import AddItem from '../AddItem/AddItem'

const AllItems = () => {
    const [currentId,setCurrentId] = React.useState(null)

  return (
      
    <div>
      <AddItem
          currentId={currentId}
          setCurrentId={setCurrentId}
          />
      <Grid container spacing={3} style={{marginTop:"100px"}}>
        <Grid item xs={12}>
          <ItemsTable 
           currentId={currentId}
           setCurrentId={setCurrentId}
          />
        </Grid>
      </Grid>
    </div>
    
  );
};
export default AllItems;
