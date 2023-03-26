import React from "react";
import { Box, Typography, Container, Button, Link, Grid } from "@mui/material";
import UserIcon from "@/lib/components/UserIcon";

interface MeetUsersProps {
  users: User[];
}

const MeetUsers = ({ users }: MeetUsersProps) => {
  const firstThreeUsers = users.slice(0, 3);

  return (
    <Container maxWidth="md">
      <Typography variant="h1" align="center">
        Meet our users
      </Typography>
      <Grid
        container
        marginTop={4}
        display="flex"
        justifyContent="space-between"
      >
        {firstThreeUsers.map((user) => (
          <Grid
            item
            xs={12}
            sm={4}
            textAlign="center"
            key={user.id}
            sx={{
              "@media (max-width: 600px)": {
                marginBottom: 3,
              },
            }}
          >
            <UserIcon size={90} />
            <Link
              href={`/users/${user.id}`}
              color="secondary"
              underline="none"
              sx={{
                "&:hover": {
                  color: "info.dark",
                },
              }}
            >
              <Typography variant="h2" marginTop={2}>
                {user.name}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Button variant="contained" color="primary">
          <Link href="/users" underline="none">
            <Typography
              color="secondary"
              textTransform="none"
              marginTop={1}
              marginX={1}
              fontWeight="bold"
            >
              Meet All Users
            </Typography>
          </Link>
        </Button>
      </Box>
    </Container>
  );
};

export default MeetUsers;
