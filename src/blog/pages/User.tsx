import React from "react";
import { NextPage } from "next";
import { Box, Container, Typography, Grid, useMediaQuery } from "@mui/material";
import Header from "../ui/header/Header";
import UserIcon from "../../lib/components/UserIcon";
import { Theme } from "@mui/system";

interface UserProps {
  user: User;
}

const User: NextPage<UserProps> = ({ user }) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box marginTop={8} textAlign="center">
          <UserIcon size={180} />
          <Typography variant="h1" marginTop={4}>
            {user.name}
          </Typography>
        </Box>
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          marginTop={6}
        >
          <Grid item xs={isMobile ? 12 : 4}>
            <Box>
              <Typography variant="h2" marginBottom={2}>
                Basic Informations
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Username: </span>
                {user.username}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Website: </span>
                {user.website}
              </Typography>
            </Box>
            <Box marginTop={2}>
              <Typography variant="h2" marginBottom={2}>
                Contact
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Email: </span>
                {user.email}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Phone: </span>
                {user.phone}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={isMobile ? 12 : 4}
            display="flex"
            justifyContent={isMobile ? "flex-start" : "center"}
            marginY={isMobile ? 2 : 0}
          >
            <Box>
              <Typography variant="h2" marginBottom={2}>
                Address
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Street: </span>
                {user.address.street}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Suite: </span>
                {user.address.suite}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>City: </span>
                {user.address.city}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Zipcode: </span>
                {user.address.zipcode}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Latitude: </span>
                {user.address.geo.lat}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Longitude: </span>
                {user.address.geo.lng}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={isMobile ? 12 : 4}>
            <Typography variant="h2" marginBottom={2}>
              Company
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Name: </span>
              {user.company.name}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Catch Phrase: </span>
              {user.company.catchPhrase}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>BS: </span>
              {user.company.bs}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default User;
