import React from "react";
import { useStyles } from "./Style";
import { Carousel } from "antd";
import Artistcard from "./cards/Artistcard";
import "antd/dist/antd.css";

function TopArtists() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Top 5 Artists rightnow </h1>
      <Carousel autoplay>
        <div>
          <Artistcard />
        </div>
        <div>
          <Artistcard />
        </div>
        <div>
          <Artistcard />
        </div>
        <div>
          <Artistcard />
        </div>
        <div>
          <Artistcard />
        </div>
      </Carousel>
    </div>
  );
}

export default TopArtists;
