import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HomepageImage from "../../images/homepageMainImage.jpg";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Rating,
  Select,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./venuListingPage.css";
import { useNavigate } from "react-router-dom";
import go from "../../helpers/RoutingUrls";
import { useState } from "react";

const VenuesListPage = () => {
  const [wishList, setWishlist] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="filter">
        <FormControl sx={{ width: "300px" }}>
          <InputLabel id="demo-simple-select-label">Select City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={age}
            //label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={"Delhi"}>Ten</MenuItem>
            <MenuItem value={"Hyderabad"}>Twenty</MenuItem>
            <MenuItem value={"Mumbai"}>Thirty</MenuItem>
            <MenuItem value={"Pune"}>Thirty</MenuItem>
            <MenuItem value={"Goa"}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="venueCards">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <Card sx={{ width: "400px", margin: "15px" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image={HomepageImage}
            />
            <CardContent sx={{ padding: "5px" }}>
              <div className="venueListInr">
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ margin: "10px 5px" }}
                >
                  Royal Resort
                </Typography>
                <div className="venueListInr">
                  <Rating
                    name="read-only"
                    value={5}
                    readOnly
                    sx={{ marginRight: "4px" }}
                  />{" "}
                  <Typography variant="h5" component="div">
                    {"5.0"}
                  </Typography>
                </div>
              </div>
              <div className="venueListInr">
                <div className="venueListInr">
                  <LocationOnIcon />
                  <Typography variant="h5">Delhi</Typography>
                </div>

                <Typography variant="h5">$49,999/-</Typography>
              </div>
            </CardContent>

            <CardActions className="venueListInr">
              {/* <Button
                size="large"
                variant="contained"
                sx={{ backgroundColor: "rgb(205, 82, 102)" }}
              >
                Add To WishList
              </Button> */}
              <div
                onClick={() => {
                  setWishlist((prevValue) => !prevValue);
                }}
              >
                {!wishList ? (
                  <FavoriteBorderIcon
                    sx={{
                      fontSize: "55px",
                      color: "rgb(205, 82, 102)",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <FavoriteIcon
                    sx={{
                      fontSize: "55px",
                      color: "rgb(205, 82, 102)",
                      cursor: "pointer",
                    }}
                  />
                )}
              </div>
              <Button
                size="large"
                variant="contained"
                sx={{ backgroundColor: "rgb(205, 82, 102)" }}
                onClick={() => {
                  navigate(go.bookVenue);
                }}
              >
                Book Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <Pagination
        count={10}
        className="pagination"
        sx={{ margin: "20px 200px" }}
        color="primary"
      />
    </div>
  );
};

export default VenuesListPage;
