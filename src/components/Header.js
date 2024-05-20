import { Button, Chip, Grid } from "@mui/material";
import logo from "../images/LoginpageImage.jpg";
import "../containers/Homepage/homepage.css";
import { useNavigate } from "react-router-dom";
import go from "../helpers/RoutingUrls";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div
        className="headerLogo"
        onClick={() => navigate(go.homePage)}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="logo" />
      </div>
      <div className="headerChip">
        {" "}
        <Chip
          className="headerChipTag"
          label="Home"
          onClick={() => {
            navigate(go.homePage);
          }}
        />
        <Chip
          className="headerChipTag"
          label="Services"
          //   onClick={() => {
          //     navigate();
          //   }}
        />
        <Chip
          className="headerChipTag"
          label="Wishlist"
          onClick={() => {
            navigate(go.wishList);
          }}
        />
        <Chip
          className="headerChipTag"
          label="Login"
          onClick={() => {
            navigate(go.login);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
