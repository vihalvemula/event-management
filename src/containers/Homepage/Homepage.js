import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import "../Homepage/homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const services = [
    "Services",
    "Makeup",
    "Photography",
    "Catering",
    "Decoration",
    "Music & Dance",
    "Mehndi",
    "Invitation Cards",
  ];

  return (
    <div className="homePage">
      <Header />
      <div style={{ flex: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div className="homePageImg">
              <div className="homePageImgInner">
                <div>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ textAlign: "center", color: "#fff" }}
                  >
                    Made In HEAVEN<br></br>Celebrate Forever with Us
                  </Typography>
                </div>
                <div className="homePageFilters">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select Services
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      //value={age}
                      //label="Age"
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select City
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      //value={age}
                      //label="Age"
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>

                  <button>Search</button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <Box
              height={900}
              p={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ textAlign: "center" }}
                >
                  Our Services
                </Typography>
                <Box height={400} width={700} className="card">
                  {/* {[
                    "Services",
                    "Makeup",
                    "Photography",
                    "Catering",
                    "Decoration",
                    "Music& Dance",
                    "Mehndi",
                    "Invitation Cards",
                  ].map((item) => (
                    <Card title={item} />
                  ))} */}
                  {services.map((item) => (
                    <Card
                      title={item}
                      onClick={() => {
                        let route = item.split(" ").join("").toLowerCase();
                        navigate(`/${route}`);
                      }}
                    />
                  ))}
                </Box>
              </div>
              <div>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ textAlign: "center", marginTop: "100px" }}
                >
                  Packages
                </Typography>
                <Box height={300} width={900} className="card">
                  {["Elite", "Gold", "Premier", "Classic"].map((item) => (
                    <Card title={item} type={"packages"} />
                  ))}
                </Box>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
