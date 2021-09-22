import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StoreIcon from '@mui/icons-material/Store';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BarChartIcon from "@mui/icons-material/BarChart";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddItem from "./AddItem/AddItem";
import AllItems from "./AllItems/AllItems";

const Sidebar = (props) => {
 
  const handleDashboard = () => {
    props.setContents('Dasboard')
  };

  const handleAddItem= () => {
    props.setContents(<AddItem/>)
  }

  const handleAddUser = ()=>{
    props.setContents('Adduser')
  }
  const handleAllItems = ()=>{
    props.setContents(<AllItems/>)
  }

  const handleAllUsers = ()=>{
    props.setContents('All users')
  }
const handleReort = ()=>{
  props.setContents('Report')
}
const handleAllClients =()=>{
  props.setContents('All users')
}

  return (
    <div>
      <ListItem button onClick={handleDashboard}>
        <ListItemIcon>
          <StoreIcon/>
        </ListItemIcon>
        <ListItemText primary="Stock" />
      </ListItem>
      <ListItem button onClick={handleAddItem}>
        <ListItemIcon>
          <AddBusinessIcon />
        </ListItemIcon>
        <ListItemText primary="Add Item" />
      </ListItem>
      <ListItem button onClick={handleAddUser}>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Add User" />
      </ListItem>
      <ListItem button onClick={handleAllUsers}>
        <ListItemIcon>
          <VisibilityIcon />
        </ListItemIcon>
        <ListItemText primary="View All Users" />
      </ListItem>
      <ListItem button onClick={handleAllItems}>
        <ListItemIcon>
          <VisibilityIcon />
        </ListItemIcon>
        <ListItemText primary="View All Items" />
      </ListItem>
      <ListItem button onClick={handleAllClients}>
        <ListItemIcon>
          <VisibilityIcon />
        </ListItemIcon>
        <ListItemText primary="View All Clients" />
      </ListItem>
      <ListItem button onClick={handleReort}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Report" />
      </ListItem>
      
    </div>
  );
};

export default Sidebar;
