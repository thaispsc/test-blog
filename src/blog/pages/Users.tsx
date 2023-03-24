import React from "react";
import { NextPage } from "next";
import { Grid, Container, Typography, useMediaQuery } from "@mui/material";
import Header from "../ui/header/Header";
import { Theme } from "@mui/system";
import UserCard from "../ui/user-card/UserCard";

interface UsersProps {
  users: User[];
}

const Users: NextPage<UsersProps> = ({ users }) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h1" marginTop={8} align="center">
          Our Users
        </Typography>
        <Grid container spacing={3} marginTop={2} marginBottom={8}>
          {users.map((user) => (
            <Grid item xs={isMobile ? 12 : 6} key={user.id}>
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Users;
