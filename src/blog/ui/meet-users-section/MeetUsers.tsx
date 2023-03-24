import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Link,
  Grid,
  Theme,
  useMediaQuery,
} from "@mui/material";
import UserIcon from "@/lib/components/UserIcon";

interface MeetUsersProps {
  users: User[];
}

const MeetUsers = ({ users }: MeetUsersProps) => {
  const firstThreeUsers = users.slice(0, 3);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
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
            xs={isMobile ? 12 : 4}
            marginBottom={isMobile ? 3 : 0}
            textAlign="center"
            key={user.id}
          >
            <UserIcon size={90} />
            <Link
              href={`/users/${user.id}`}
              color="secondary"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#838383",
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