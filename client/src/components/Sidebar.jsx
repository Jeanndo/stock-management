import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StoreIcon from "@mui/icons-material/Store";
import BarChartIcon from "@mui/icons-material/BarChart";
import AllItems from "./AllItems/AllItems";
import AllUsers from "./AllUsers/AllUsers";
import Stock from './stock/stock'
import { PeopleTwoTone } from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';
import Divider from "@mui/material/Divider"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ListItemAvatar } from "@mui/material";

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
      <ListItem>
      <ListItemAvatar>
        <Avatar alt="user" src="https://avatars.githubusercontent.com/u/59208992?v=4" />
        </ListItemAvatar>
        <ListItemText primary="User"/>
      </ListItem>
      <Divider/>
      <ListItem button onClick={handleDashboard}>
        <ListItemIcon>
          <StoreIcon style={{color:'#2196f3'}}/>
        </ListItemIcon>
        <ListItemText primary="Stock" />
      </ListItem>
      <ListItem button onClick={handleAllItems}>
        <ListItemIcon>
          <ShoppingCartIcon style={{color:'#2196f3'}}/>
        </ListItemIcon>
        <ListItemText primary="All Products" />
      </ListItem>
      <ListItem button onClick={handleAllUsers}>
        <ListItemIcon>
          <PeopleTwoTone style={{color:'#2196f3'}}/>
        </ListItemIcon>
        <ListItemText primary="All Users" />
      </ListItem>
      <ListItem button onClick={handleReort}>
        <ListItemIcon>
          <BarChartIcon style={{color:'#2196f3'}}/>
        </ListItemIcon>
        <ListItemText primary="Report" />
      </ListItem>
    </div>
  );
};

export default Sidebar;
