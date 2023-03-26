import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Typography,
  Container,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const PagesLinks = [
  { name: "Home", link: "/" },
  { name: "Posts", link: "/posts/1" },
  { name: "Users", link: "/users" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color="secondary" position="static">
      <Container maxWidth="md">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            height: "100px",
            paddingX: "0",
            "&.MuiToolbar-root": {
              padding: "0",
            },
          }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link href="/" underline="none">
              <Typography variant="h1">BLOG</Typography>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon color="primary" fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <MenuItem>
                <Link href="/" underline="none">
                  <Typography color="black">Home</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/posts/1" underline="none">
                  <Typography color="black">Posts</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/users" underline="none">
                  <Typography color="black">Users</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Link href="/" underline="none">
              <Typography variant="h1">BLOG</Typography>
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {PagesLinks.map((page) => (
              <Button
                key={page.name}
                disableRipple
                disableFocusRipple
                sx={{
                  "&:hover": {
                    background: "none",
                  },
                }}
              >
                <Link href={page.link} underline="none">
                  <Typography
                    variant="body1"
                    sx={{
                      "&:hover": {
                        color: "info.main",
                      },
                    }}
                  >
                    {page.name}
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
