import { Box, Button, Grid, Pagination, Typography } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
const WishlistPage = () => {
  return (
    <div>
      <Header />
      <div style={{ flex: 1, minHeight: "100vh" }}>
        <Grid container spacing={1} zeroMinWidth>
          <div
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">My Wishlist</Typography>{" "}
            <FavoriteIcon
              sx={{
                fontSize: "55px",
                color: "rgb(205, 82, 102)",
                cursor: "pointer",
              }}
            />
          </div>
          <Grid
            item
            xs={12}
            sx={{
              minHeight: "700px",
              display: "flex",
              flexDirection: "row",
            }}
            className="box"
          >
            <Box p={2} sx={{ width: "100vw" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "0px 10px",
                  margin: "10px 0px",
                }}
              >
                <Typography variant="h5" sx={{ minWidth: "40%" }}>
                  Service Name
                </Typography>
                <Typography variant="h5" sx={{ minWidth: "30%" }}>
                  Price
                </Typography>
                <Typography variant="h5" sx={{ minWidth: "15%" }}>
                  Status
                </Typography>
                <span> </span>
              </div>

              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    minHeight: "100px",
                    backgroundColor: "rgb(231, 149, 163)",
                    padding: "0px 10px",
                    margin: "10px 0px",
                  }}
                >
                  <Typography variant="h6" sx={{ width: "40%" }}>
                    Royal Resort
                  </Typography>
                  <Typography variant="h6" sx={{ minWidth: "30%" }}>
                    49,999
                  </Typography>
                  <Typography variant="h6" sx={{ minWidth: "15%" }}>
                    Available
                  </Typography>
                  <Button
                    size="large"
                    variant="contained"
                    sx={{ backgroundColor: "rgb(205, 82, 102)" }}
                    // onClick={() => {
                    //   navigate(go.bookVenue);
                    // }}
                  >
                    Add to Cart
                  </Button>
                  <DeleteIcon
                    sx={{
                      fontSize: "55px",
                      cursor: "pointer",
                      paddingLeft: "5px",
                    }}
                  />
                </div>
              ))}
              <Pagination
                count={10}
                className="pagination"
                sx={{ margin: "30px 10px" }}
                color="primary"
              />
            </Box>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;
