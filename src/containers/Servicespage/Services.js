import { Box, Grid } from "@mui/material";

const Services = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Box
          height={500}
          p={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          height={900}
          p={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Services;
