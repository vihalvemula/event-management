import { Button, Chip, Grid } from "@mui/material";
import logo from "../images/LoginpageImage.jpg";
import "../containers/Homepage/homepage.css";
import { useNavigate } from "react-router-dom";
import go from "../helpers/RoutingUrls";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <Grid container spacing={1}>
        <Grid item xs={6} className="footerContact1">
          <div>
            <b>Contact Us</b>
          </div>
          <div>vihalrao704@gmail.com</div>
          <div>+91-9515595704</div>
        </Grid>
        <Grid item xs={6} className="footerContact2">
          <div>
            <b>Follow Us on</b>
          </div>
          <div>vihalrao@facebook.com</div>
          <div>vihalrao@Instagram.com</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
