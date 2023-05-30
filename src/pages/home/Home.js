import React from "react";
// import './home.css'
import { useStyles } from "../../style";
import Jumbotron from "../../components/Jumbotron/Jumbotron";


function Home() {
  const classes = useStyles();

  return (
    <Jumbotron />
  );
}

export default Home;