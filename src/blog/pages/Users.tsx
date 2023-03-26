import React from "react";
import { NextPage } from "next";
import { Grid, Container, Typography } from "@mui/material";
import Header from "../ui/header/Header";
import UserCard from "../ui/user-card/UserCard";

interface UsersProps {
  users: User[];
}

const Users: NextPage<UsersProps> = ({ users }) => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h1" marginTop={8} align="center">
          Our Users
        </Typography>
        <Grid container spacing={3} marginTop={2} marginBottom={8}>
          {users.map((user) => (
            <Grid item xs={12} sm={6} key={user.id}>
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Users;
