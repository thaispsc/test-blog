import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Link,
  Grid,
  useMediaQuery,
  Theme,
} from "@mui/material";
import Header from "../ui/header/Header";
import { getUserById } from "../services/users";
import UserIcon from "@/lib/components/UserIcon";

interface PostProps {
  post: Post;
  comments: Comment[];
}

const Post: NextPage<PostProps> = ({ post, comments }) => {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserById(post.userId);
      setUser(userData);
    };
    fetchUser();
  }, []);

  const isUserFetched = Object.keys(user).length !== 0;

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <>
      <Header />
      {isUserFetched && (
        <Container maxWidth="md">
          <Typography variant="h1" marginTop={8} align="center">
            {post.title}
          </Typography>
          <Link
            href={`/users/${user.id}`}
            underline="none"
            color="secondary"
            sx={{
              "&:hover": {
                color: "#838383",
              },
            }}
          >
            <Typography variant="h2" align="center" marginTop={2}>
              {user.name}
            </Typography>
          </Link>
          <Box
            paddingTop="50%"
            marginY={2}
            sx={{ backgroundColor: "#bababa" }}
          ></Box>
          <Typography>{post.body}</Typography>
          <Box marginTop={5}>
            <Typography variant="h2">Comments</Typography>
            {comments.map((comment) => (
              <Card
                key={comment.id}
                variant="outlined"
                sx={{ marginY: "16px", backgroundColor: "#EDEDED" }}
              >
                <Grid
                  container
                  paddingX={isMobile ? 0 : 4}
                  display="flex"
                  alignItems="center"
                >
                  <Grid item xs={2} display={isMobile ? "none" : "auto"}>
                    <UserIcon size={90} />
                  </Grid>
                  <Grid item xs={isMobile ? 12 : 10}>
                    <CardContent>
                      <Box display={isMobile ? "auto" : "flex"}>
                        <Typography paddingRight={isMobile ? 0 : 2}>
                          {comment.name}
                        </Typography>
                        <Typography
                          paddingLeft={isMobile ? 0 : 2}
                          borderLeft={isMobile ? 0 : 2}
                          borderColor="#bababa"
                        >
                          {comment.email}
                        </Typography>
                      </Box>
                      <Typography>{comment.body}</Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </Box>
        </Container>
      )}
    </>
  );
};

export default Post;
