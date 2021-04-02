import React from "react";
import { useStyles } from "./Style";
import { Grid, Paper, Typography, ButtonBase } from "@material-ui/core";

function Artistcard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://demos.creative-tim.com/nextjs-material-kit-pro/_next/static/images/kendall-5a0e395b3b76565583339619ca3110f4.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" style={{ color: "#fff" }}>
                  Amine ladraa
                </Typography>
                <Typography variant="body2" gutterBottom>
                  don't be afraid of the light
                </Typography>
                <Typography variant="body2" style={{ color: "#fff" }}>
                  look forward
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ cursor: "pointer" }}
                ></Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Artistcard;
