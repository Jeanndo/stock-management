import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';
import { resetPassword } from "../../redux/actiions/auth";
import Marquee from "react-fast-marquee";


const theme = createTheme();

const  ResetPassword =()=>{
  
  const passwordResetToken= window.location.href.split('/')[4]
  const [formData,setFormData] = React.useState({password:'',passwordResetToken:passwordResetToken})
  
  const [submited,setSubmited ]=React.useState(false)

  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
   dispatch(resetPassword(formData))
     setSubmited(!submited)
  };


 const handleCancel = ()=>{
   history.push('/login')
 }
console.log("check",submited)

const handleBack = ()=>{
    history.push('/login')
}

console.log("pass&token",formData)
  return (
    <>
    {!submited?(
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs"style={{backgroundColor:'#3f51b5',padding:'20px',marginTop:'50px'}}>
        <CssBaseline />
        <Marquee>
          <Typography component="h1" variant="h5" style={{color:'white'}}>
            Change your password then hit submit 
          </Typography>
          </Marquee>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          style={{backgroundColor:'white',padding:'10px'}}
        >
          
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
             onChange={(event)=>setFormData({...formData,password:event.target.value})}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleCancel}
            >
            Cancel
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    ):(
        <div style={{backgroundColor:'#3f51b5',padding:'10px',marginTop:'50px',width:'400px',marginLeft:'400px',textAlign:'center'}}>
        <Typography component="h1" variant="h5" style={{color:'white'}}>
            Return to login page.
          </Typography>
          <Button variant="contained" style={{backgroundColor:'white',color:'#000'}}
          onClick={handleBack}
          >
            Login 
          </Button>
        </div>
    )
    }
    </>
  );
}


export default ResetPassword