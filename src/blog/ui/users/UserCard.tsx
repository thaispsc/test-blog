import React, { useState } from "react";
import { Typography, Card, CardContent, Link } from "@mui/material";
import UserIcon from "./UserIcon";

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <Link href={`/users/${user.id}`} underline="none">
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: "32px",
          "&:hover": {
            boxShadow: "4px 4px 4px 2px rgba(0, 0, 0, 0.2)",
          },
          "@media (max-width: 900px)": {
            paddingX: "0",
          },
        }}
      >
        <UserIcon />
        <CardContent>
          <Typography>Username: {user.username}</Typography>
          <Typography>Name: {user.name}</Typography>
          <Typography>Email: {user.email}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default UserCard;
