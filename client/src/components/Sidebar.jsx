import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StoreIcon from "@mui/icons-material/Store";
import BarChartIcon from "@mui/icons-material/BarChart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AllItems from "./AllItems/AllItems";
import AllUsers from "./AllUsers/AllUsers";
import Stock from './stock/stock'
import { PeopleTwoTone } from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';
import Divider from "@mui/material/Divider"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Sidebar = (props) => {
  const handleDashboard = () => {
    props.setContents(<Stock/>);
  };

  const handleAllItems = () => {
    props.setContents(<AllItems />);
  };

  const handleAllUsers = () => {
    props.setContents(<AllUsers />);
  };
  const handleReort = () => {
    props.setContents("Report");
  };
  return (
    <div>
      <div style={{marginLeft:'10px',marginBottom:'10px'}}>
      <Avatar alt="user" src="https://avatars.githubusercontent.com/u/59208992?v=4" />
      </div>
      <Divider/>
      <ListItem button onClick={handleDashboard}>
        <ListItemIcon>
          <StoreIcon />
        </ListItemIcon>
        <ListItemText primary="Stock" />
      </ListItem>
      <ListItem button onClick={handleAllItems}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="All Products" />
      </ListItem>
      <ListItem button onClick={handleAllUsers}>
        <ListItemIcon>
          <PeopleTwoTone />
        </ListItemIcon>
        <ListItemText primary="All Users" />
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
