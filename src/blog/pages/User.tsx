import React from "react";
import { NextPage } from "next";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import Header from "../ui/header/Header";

interface UserProps {
  user: User;
}

const User: NextPage<UserProps> = ({ user }) => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h1" marginTop={8} align="center">
          User Informations
        </Typography>
        <Typography>{user.username}</Typography>
        <Typography>{user.name}</Typography>
        <Typography>{user.email}</Typography>
        <Typography>{user.address.street}</Typography>
        <Typography>{user.address.suite}</Typography>
        <Typography>{user.address.city}</Typography>
        <Typography>{user.address.zipcode}</Typography>
      </Container>
    </>
  );
};

export default User;
