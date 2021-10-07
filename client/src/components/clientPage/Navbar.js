import React from "react";
import { useStyles } from "./styles";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Marquee from "react-fast-marquee";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {useHistory,useLocation} from 'react-router-dom'

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const UserNavBar = () => {

  const classes = useStyles();
  const [user,setUser] = React.useState(JSON.parse(localStorage.getItem('profile')))

  const dispatch = useDispatch();
  const history = useHistory()
  const location = useLocation()

  const logout = ()=>{
    dispatch({type:'LOGOUT'})
    history.push('/')
  
    setUser(null)
    }
  
  console.log("user",user)
  return (
   
    <div className={classes.navContainer}>

      {user?.result?.role==='client'&&(
         <>
         <div className={classes.welcome}>
         <Marquee>
           <Typography>WELCOME TO CUSTOM BONDED WAREHOUSE SYSTEM</Typography>
         </Marquee>
       </div>
       <div className={classes.profile}>
         
           <StyledBadge
             overlap="circular"
             anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
             variant="dot"
           >
             <Avatar
               alt="user"
             >
               {user?.result?.name.charAt(0).toUpperCase()}
            </Avatar>
           </StyledBadge>
           <label>{user?.result?.name}</label>
           <Button 
             variant="contained" 
             style={{marginRight:'-100px',float:'right',backgroundColor:'#ffff',color:'#000'}}
             onClick={logout} 
             >Logout
             </Button>
       </div>
       </>
      )
      }
    </div>
  );
};

export default UserNavBar;
