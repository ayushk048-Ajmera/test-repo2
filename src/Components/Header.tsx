import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Container, Menu, MenuItem, useMediaQuery } from "@material-ui/core";
import { theme } from "../theme/theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menu: {
      width: " 100px",
      textAlign: "center",
      textTransform: "capitalize",
      "& :hover": {
        background: "rgba(150,150,150,0.5)",
      },
    },
  })
);

export default function Header() {
  const classes = useStyles();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const manuItems: { label: string; pageURL: string }[] = [
    { label: "home", pageURL: "/" },
    { label: "contact", pageURL: "/contact" },
    { label: "about", pageURL: "/about" },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              LOGO
            </Typography>
            {isMobile ? (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {manuItems.map((manuItem) => (
                    <MenuItem
                      key={manuItem.label}
                      className={classes.menu}
                      onClick={() => setAnchorEl(null)}
                      component="a"
                      href={manuItem.pageURL}
                    >
                      {manuItem.label}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ) : (
              <>
                {manuItems.map((manuItem) => (
                  <MenuItem
                    key={manuItem.label}
                    className={classes.menu}
                    component="a"
                    href={manuItem.pageURL}
                    onClick={() => setAnchorEl(null)}
                  >
                    {manuItem.label}
                  </MenuItem>
                ))}
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
