import React from "react";
import { useStyles } from "./styles";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Marquee from "react-fast-marquee";

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

  return (

    <div className={classes.navContainer}>
      <div className={classes.welcome}>
        <Marquee>
          <Typography>WELCOMA to STOCK MANAGEMENT SYSTEM</Typography>
        </Marquee>
      </div>
      <div className={classes.profile}>
        <Typography>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt="user"
              src="https://avatars.githubusercontent.com/u/59208992?s=48&v=4"
            />
          </StyledBadge>
          <label>Jeanndo</label>
        </Typography>
      </div>
    </div>
  );
};

export default UserNavBar;
