import React from "react";
import HeroBanner from "../components/HeroBanner";
import { Box } from "@mui/material";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
