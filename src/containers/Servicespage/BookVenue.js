import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import Swiper from "../../components/Swiper";
import "./services.css";
import Card from "../../components/Card";
import WaterOutlinedIcon from "@mui/icons-material/WaterOutlined";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AlarmOffIcon from "@mui/icons-material/AlarmOff";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeckIcon from "@mui/icons-material/Deck";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const reviews = [
  "Beautiful location for a wedding or celebrationsOn the slopes of the Nandi Hill, nestled in a valley, adjacent to the Discovery Village.You drive up to the gates, and up the driveway to the venue.Beautiful location for a wedding or celebrationsOn the slopes of the Nandi Hill, nestled in a valley, adjacent to the Discovery Village.You drive up to the gates, and up the driveway to the venue.",
  "Beautiful location for a wedding or celebrationsOn the slopes of the Nandi Hill, nestled in a valley, adjacent to the Discovery Village.You drive up to the gates, and up the driveway to the venue.",
  "Beautiful location for a wedding or celebrationsOn the slopes of the Nandi Hill, nestled in a valley, adjacent to the Discovery Village.You drive up to the gates, and up the driveway to the venue.",
  "Beautiful location for a wedding or celebrationsOn the slopes of the Nandi Hill, nestled in a valley, adjacent to the Discovery Village.You drive up to the gates, and up the driveway to the venue.",
  "Beautiful location for a wedding or celebrationsOn the slopes of the Nandi Hill, nestled in a valley, adjacent to the Discovery Village.You drive up to the gates, and up the driveway to the venue.",
];

const BookVenue = () => {
  const [wishList, setWishlist] = useState(false);
  return (
    <Grid container spacing={1} zeroMinWidth>
      <Grid item xs={12} sx={{ backgroundColor: "rgb(231, 149, 163)" }}>
        <Box height={500} p={2} className="imageSlider">
          <Swiper />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          minHeight: "630px",
          display: "flex",
          flexDirection: "row",
          padding: "0 20px !important",
        }}
        className="box"
      >
        <Box p={2} sx={{ width: "60vw" }} className="leftOffer">
          <div>
            <Typography
              variant="h5"
              // sx={{ textAlign: "center", marginTop: "100px" }}
            >
              About Venue:
            </Typography>
            <span>
              If you are looking for a traditional wedding that has a historic
              touch in its structure, Amitarasa is your go-to choice in
              Bangalore! This venue is beautifully designed to cater for the
              needs of the people who look forward to weddings that are
              connected to their roots while being equally eloquent to match the
              newest trends. Moreover, this venue is apt for both grand and
              intimate weddings.
            </span>
          </div>
          <div className="address">
            <div>
              <Typography
                variant="h5"
                // sx={{ textAlign: "center", marginTop: "100px" }}
              >
                Address:
              </Typography>
              <span>5618 N Frostwood,Delhi,Inida</span>
              <Typography
                variant="h5"
                // sx={{ textAlign: "center", marginTop: "100px" }}
              >
                Contact Number:
              </Typography>
              <span>+91-1234567892</span>
            </div>
            <div>
              <Typography
                variant="h5"

                // sx={{ textAlign: "center", marginTop: "100px" }}
              >
                Capacity
              </Typography>
              <div>
                <div className="ratingCls">
                  <Typography variant="h6" sx={{ marginRight: "5px" }}>
                    Indoor:
                  </Typography>
                  <span>600 people</span>
                </div>
                <div className="ratingCls">
                  <Typography variant="h6" sx={{ marginRight: "5px" }}>
                    Outdoor:
                  </Typography>
                  <span>400 people</span>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <Typography variant="h6">What this place offer</Typography>
            <Box className="offer">
              <ul>
                <li>
                  <WaterOutlinedIcon />
                  waterfront
                </li>
                <li>
                  <WifiIcon />
                  Free wifi
                </li>
                <li>
                  <LocalParkingIcon />
                  parking
                </li>
                <li>
                  <CameraAltIcon />
                  security cameras
                </li>
                <li>
                  <AlarmOffIcon />
                  smoke alaram
                </li>
                <li>
                  <AcUnitIcon />
                  Air conditioning
                </li>
              </ul>
            </Box>
          </div>

          <div
            onClick={() => {
              setWishlist((prevValue) => !prevValue);
            }}
          >
            {!wishList ? (
              <FavoriteBorderIcon
                sx={{
                  fontSize: "100px",
                  color: "rgb(205, 82, 102)",
                  cursor: "pointer",
                }}
              />
            ) : (
              <FavoriteIcon
                sx={{
                  fontSize: "100px",
                  color: "rgb(205, 82, 102)",
                  cursor: "pointer",
                }}
              />
            )}
          </div>
        </Box>

        <Box p={2} sx={{ width: "50vw" }} className="rightOffer">
          <div>
            <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
              $15000/Night
            </Typography>
          </div>
          <div className="checkInDiv">
            <div>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                Check In
              </Typography>{" "}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
                    padding: "10px",
                  }}
                  disablePast
                />
              </LocalizationProvider>
            </div>
            <Divider
              orientation="vertical"
              flexItem
              style={{ border: "1px solid black" }}
            />
            <div>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                Check Out
              </Typography>{" "}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
                    padding: "10px",
                  }}
                  disablePast
                />
              </LocalizationProvider>
            </div>
          </div>
          <div style={{ margin: "0 auto" }}>
            <Paper elevation={7} className="btn">
              Reserve
            </Paper>
          </div>
          <div className="calcu">
            <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
              $15,000 x 3 nights
            </Typography>{" "}
            <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
              $45,000
            </Typography>
          </div>
          <div className="calcu">
            <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
              Long stay discount
            </Typography>{" "}
            <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
              $10,000
            </Typography>
          </div>
          <Divider style={{ border: "1px solid black" }} />
          <div className="calcu">
            <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
              <b>Total</b>
            </Typography>{" "}
            <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
              <b>$35,000</b>
            </Typography>
          </div>
        </Box>
      </Grid>
      <Grid
        container
        wrap="nowrap"
        spacing={2}
        sx={{
          minHeight: "550px",
          display: "flex",
          flexDirection: "row",
          padding: "20px !important",
        }}
        className="box"
      >
        <Grid item xs={6} className="lftReview">
          <div className="ratingCls">
            {" "}
            <Typography component="legend">
              <b>Over All Rating:</b>
            </Typography>
            <Rating name="read-only" value={5} readOnly />{" "}
            <Typography
              variant="h5"
              component="div"
              sx={{ marginLeft: "10px" }}
            >
              {"5.0"}
            </Typography>
          </div>
          <Typography component="legend">
            <b>All Reviews</b>
          </Typography>
          <Divider />
          <div
            style={{
              height: "400px",
              overflowY: "scroll",
              scrollbarWidth: "thin",
            }}
          >
            {reviews.map((review) => (
              <div style={{ margin: "5px 0" }}>
                <div className="ratingCls">
                  <Typography variant="h5" component="div">
                    {"vihal rao "}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {"(5.0)"}
                  </Typography>
                </div>

                {/* <Typography variant="h6" component="div">
                  {review}
                </Typography> */}
                <p style={{ margin: "5px 2px !important" }}>{review}</p>
                <Divider />
              </div>
            ))}
          </div>
        </Grid>

        <Grid item xs className="reviewTextField">
          <div className="ratingCls">
            <Typography component="legend">
              <b>Rate Venue:</b>
            </Typography>
            <Rating
              name="simple-controlled"
              // value={value}
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
            />
          </div>
          <TextField
            sx={{ width: "-webkit-fill-available" }}
            id="outlined-multiline-static"
            label="Tell us about your experience"
            multiline
            rows={15}
            variant="outlined"
          />{" "}
          <Button
            size="large"
            variant="contained"
            sx={{ backgroundColor: "rgb(205, 82, 102)" }}
            // onClick={() => {
            //   navigate(go.bookVenue);
            // }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BookVenue;
