import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Movies() {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Movie Name
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Year
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Genre
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Director/Directories
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Actors
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Typography variant="caption" color="text.secondary" component="div">
            Bela bela bela bela bela bela bela bela bela bela bela bela bela
            bela
            <br />
            bela bela bela bela bela bela bela bela bela bela bela bela bela
            bela
          </Typography>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 1000, height: 500 }}
        image="https://source.unsplash.com/random"
        alt="Live from space album cover"
      />
    </Card>
  );
}
