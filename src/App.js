import React from "react";
import {
  Grid,
  Container,
  CssBaseline,
  Box,
  Link,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PosterCarousel from "./components/postersCarousel/PostersCarousel";
import Home from "./components/home/Home";
import "./App.css";
import Header from "./components/header/Header";
import { Route, Switch } from "react-router-dom";
import Movies from "./components/movies/Movies";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://localhost:3000/">
        MOVIE-DETAIL
      </Link>
    </Typography>
  );
}

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Grid container spacing={1}>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Box
              sx={{
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="sm">
                <PosterCarousel />
              </Container>
            </Box>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Movie">
                <Movies />
              </Route>
            </Switch>
          </Grid>
          <Grid item sx={2} />
        </Grid>
      </main>
      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default App;
