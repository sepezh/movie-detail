import React, { useCallback, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Container,
  Button,
} from "@mui/material";
import "./Home.css";
import { Link } from "react-router-dom";

const cards = [1, 2, 3, 4, 5, 6];

const Home = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Movie Name
                </Typography>
                <Typography>year</Typography>
              </CardContent>
              <CardActions className="card-actions">
                <Button size="small">
                  <Link to="/Movie">View</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
