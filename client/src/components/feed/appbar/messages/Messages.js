import { Avatar, Grid, Typography, Divider } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Style";

function Messages() {
  const classes = useStyles();
  return (
    <div>
      <Grid container wrap="nowrap" className={classes.grid} spacing={2}>
        <Grid item xs={2} className={classes.avatar}>
          <Avatar src="https://demos.creative-tim.com/nextjs-material-kit-pro/_next/static/images/kendall-5a0e395b3b76565583339619ca3110f4.jpg" />
        </Grid>

        <Grid item xs={10} spacing={2}>
          <Typography variant="h6">Amine Lad</Typography>
          <Typography variant="body1" noWrap>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
          </Typography>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}

export default Messages;
