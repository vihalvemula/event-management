import { Box, Button, Grid, TextField, Typography, Link } from "@mui/material";
import LoginpageImage from "../../images/LoginpageImage.jpg";
import "./login.css";
import { useLocation, useNavigate } from "react-router-dom";
import go from "../../helpers/RoutingUrls";

const CreateAccPage = () => {
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
            Create Account
          </Typography>
          <div>
            <TextField
              margin="normal"
              required
              id="outlined-required"
              label="First Name"
              fullWidth
            />
            <TextField
              margin="normal"
              required
              id="outlined-required"
              label="Last Name"
              fullWidth
            />
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
              label="Password"
              type="password"
              fullWidth
            />
            <Button
              variant="contained"
              margin="normal"
              fullWidth
              sx={{ margin: "21px 0", backgroundColor: "rgb(205, 82, 102)" }}
            >
              Submit
            </Button>
            <Link
              sx={{ cursor: "pointer" }}
              onClick={() => {
                location?.pathname?.includes("admin")
                  ? navigate(go.adminLogin)
                  : navigate(go.login);
              }}
            >
              {" "}
              Already have an account? Sign in
            </Link>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreateAccPage;
