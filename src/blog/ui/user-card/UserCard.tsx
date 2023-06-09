import React from "react";
import { Typography, Card, CardContent, Link } from "@mui/material";
import UserIcon from "../../../lib/components/UserIcon";

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
          backgroundColor: "info.light",
          "&:hover": {
            boxShadow: "4px 4px 4px 2px rgba(0, 0, 0, 0.2)",
          },
          "@media (min-width: 900px)": {
            paddingX: "16px",
          },
        }}
      >
        <UserIcon size={60} />
        <CardContent>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Username: </span>
            {user.username}
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Name: </span>
            {user.name}
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Email: </span>
            {user.email}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default UserCard;
