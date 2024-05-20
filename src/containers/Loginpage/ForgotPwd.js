import { Box, Button, Grid, TextField, Typography, Link } from "@mui/material";
import LoginpageImage from "../../images/LoginpageImage.jpg";
import "./login.css";
import { useNavigate } from "react-router-dom";
import go from "../../helpers/RoutingUrls";

const ForgotPwd = () => {
  const navigate = useNavigate();
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
            Find your account
          </Typography>
          <div>
            <TextField
              margin="normal"
              required
              id="outlined-password-input"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              margin="normal"
              required
              id="outlined-password-input"
              label="Enter new password"
              type="password"
              fullWidth
            />
            <TextField
              margin="normal"
              required
              id="outlined-password-input"
              label="Re-enter new password"
              type="password"
              fullWidth
            />
            <Button
              variant="contained"
              margin="normal"
              fullWidth
              sx={{ margin: "21px 0", backgroundColor: "rgb(205, 82, 102)" }}
              onClick={() => {
                navigate(go.login);
              }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ForgotPwd;
