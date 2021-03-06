import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { forgotPassword} from "../../redux/actiions/auth";
import Marquee from "react-fast-marquee";

const initialState = { email: "" };

const theme = createTheme();

const ForgotPassword = () => {
  const [formData, setFormData] = React.useState(initialState);
  const [submited, setSubmited] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(forgotPassword(formData))
    setSubmited(!submited);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleCancel = () => {
    history.push("/login");
  };

  const handleBack = () => {
    history.push("/login");
  };

  console.log("email",formData)
  return (
    <>
      {!submited ? (
        <ThemeProvider theme={theme}>
          <Container
            component="main"
            maxWidth="xs"
            style={{
              backgroundColor: "#3f51b5",
              padding: "20px",
              marginTop: "50px",
            }}
          >
            <CssBaseline />
            <Marquee>
              <Typography
                component="h1"
                variant="h5"
                style={{ color: "white" }}
              >
                Fill your email in the email TextField down below and submit.
              </Typography>
            </Marquee>
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              style={{ backgroundColor: "white", padding: "10px" }}
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
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
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
      ) : (
        <div
          style={{
            backgroundColor: "#3f51b5",
            padding: "10px",
            marginTop: "50px",
            width: "400px",
            marginLeft: "400px",
            textAlign:'center'

          }}
        >
          <Typography component="h1" variant="h5" style={{ color: "white" }}>
            Check email to reset your password.
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: "white", color: "#000" }}
            onClick={handleBack}
          >
            Cancel
          </Button>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
