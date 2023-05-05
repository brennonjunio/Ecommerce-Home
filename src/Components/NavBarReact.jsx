import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Form } from "react-bootstrap";

const NavBarReact = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerLinks = [
    { name: "Home", link: "/", icon: <HomeIcon /> },
    { name: "Sobre", link: "/sobre", icon: <InfoIcon /> },
  ];

  return (
    <AppBar position="static" style={{ backgroundColor: "#18662C" }}>
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Container className="d-flex justify-content-center">
            <Form className="d-flex mx-auto">
              <Form.Control
                type="search"
                placeholder="O que você Procura?"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Container>
          <ShoppingCartIcon sx={{ mr: 2 }} />
          <FavoriteIcon />
        </Toolbar>
        <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
          <List>
            {drawerLinks.map((link) => (
              <ListItem
                button
                component={Link}
                to={link.link}
                key={link.name}
                onClick={handleDrawerClose}
              >
                <IconButton color="inherit">{link.icon}</IconButton>
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Container>
    </AppBar>
  );
};

export default NavBarReact;
