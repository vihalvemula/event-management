import { Box, Button, Grid, TextField, Typography, Link } from "@mui/material";
import LoginpageImage from "../../images/LoginpageImage.jpg";
import "./login.css";
import { useLocation, useNavigate } from "react-router-dom";
import go from "../../helpers/RoutingUrls";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <div className="lgnDtls">
          <img src={LoginpageImage} alt="logo" />
        </div>
      </Grid>
      <Grid item xs={5} className="lgnDtls2">
        <Box height={400} width={600} p={2}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
            Login
          </Typography>
          <div>
            <TextField
              margin="normal"
              required
              id="outlined-required"
              label="Username"
              fullWidth
            />
            <TextField
              margin="normal"
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              fullWidth
            />
            <Button
              variant="contained"
              margin="normal"
              fullWidth
              sx={{ margin: "21px 0 0 0" }}
              onClick={() => {
                location?.pathname?.includes("admin")
                  ? navigate(go.adminCreateAcc)
                  : navigate(go.homePage);
              }}
            >
              Submit
            </Button>
            <div className="forgotPwd">
              <Link
                onClick={() => {
                  location?.pathname?.includes("admin")
                    ? navigate(go.adminCreateAcc)
                    : navigate(go.createAcc);
                }}
                sx={{ cursor: "pointer" }}
              >
                Don't have an account? Sign Up
              </Link>
              <Link
                onClick={() => {
                  navigate(go.forgotPwd);
                }}
                sx={{ cursor: "pointer" }}
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
