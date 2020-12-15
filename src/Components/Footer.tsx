import React, { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { AppBar, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    height: "auto",
    position: "absolute",
    bottom: "0",
    left: 0,
  },
  title: {
    flexGrow: 1,
  },
});
export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar className={classes.footer}>
      <Typography variant="h6" className={classes.title}>
        LOGO
      </Typography>
    </AppBar>
  );
}
