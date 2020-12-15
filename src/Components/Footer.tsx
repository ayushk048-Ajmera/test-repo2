import React, { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import {
  AppBar,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import { theme } from "../theme/theme";
import classes from "*.module.sass";

const styles = (theme: Theme) =>
  createStyles({
    footer: {
      height: "auto",
      width: "100%",
      position: "fixed",
      bottom: "0",
      left: 0,
      backgroundColor: theme.palette.primary.main,
    },
    title: {
      flexGrow: 1,
      color: theme.palette.grey[100],
    },
    title2: {
      flexGrow: 1,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.body2.fontSize,
      color: theme.palette.grey[100],
      textTransform: "capitalize",
    },
  });
function Footer(props: WithStyles<typeof styles>) {
  const { classes } = props;
  return (
    <div className={classes.footer}>
      <Typography variant="body1" className={classes.title}>
        Hello
      </Typography>
      <Typography variant="body1" className={classes.title2}>
        world
      </Typography>
    </div>
  );
}

export default withStyles(styles)(Footer);
