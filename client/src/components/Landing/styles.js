import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  Upper: {
    padding: "20px",
    width: "100%",
    height: "80vh",
    marginTop: "100px",
    marginBottom: "50px",
    background: "#3f51b5",
  },
  Navigation: {
    position: "fixed",
    textAlign: "center",
    width: "100%",
    height: " 99px",
    left: "0px",
    top: "0px",
    background: "#FFFF",
  },
  branches: {
    padding: "20px",
    display: "flex",
    width: "100%",
    background: "#FFFFFF",
  },
  NavItems: {
    listStyle: "none",
    display: " flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "10px",
    position: "absolute",
    height: "23px",
    width: "800px",
    marginLeft: "400px",
  },
  ListItems: {
    marginRight: "20px",
    textAlign: "center",
    lineHeight: 1.7,
    fontSize: "16px",
    color: "#000",
    paddingLeft: "20px",
  },
  heading1: {
    fontWeight: 400,
    fontSize: "25px",
    lineHeight: 2,
    textAlign: "center",
    color: "#ffff",
  },
  CardHeading: {
    marginTop: "150px",
    fontWeight: 400,
    fontSize: "25px",
    lineHeight: 2,
    textAlign: "center",
    color: "#ffff",
  },
  pricingContainer:{
    marginLeft:'100px',
  display:'flex'
  },
  firstCard: {
    width: "330px",
    height: "400px",
    marginLeft: "200px",
    backgroundColor: "#757de8",
  },
  secondCard: {
    width: "300px",
    height: "400px",
    marginLeft: "100px",
    background: "#3f51b5",
  },
  About:{
    padding:'30px',
    display:'flex',
    color:'#000',
    height:'50vh'
  },
  aboutDescription:{
    width:'500px',
    marginLeft:'100px'

  },
  contact:{
  position:'absolute',
  width: '606px',
  height: '860px',
  left: '497px',
  top:'1000px'
  },

});
