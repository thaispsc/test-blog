import React from "react";
import { NextPage } from "next";
import { Box, Container, Typography } from "@mui/material";
import Header from "../ui/header/Header";
import UserIcon from "../../lib/components/UserIcon";
import UserData from "../ui/user-data/UserData";

interface UserProps {
  user: User;
}

const User: NextPage<UserProps> = ({ user }) => {
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
        <UserData user={user} />
      </Container>
    </>
  );
};

export default User;
