import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import Header from "../ui/header/Header";
import { getUserById } from "../services/users";

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

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h1" marginTop={10} align="center">
          {post.title}
        </Typography>
        <Typography variant="h2" align="center">
          {user.name}
        </Typography>
        <Box height={500} marginY={2} sx={{ backgroundColor: "#bababa" }}></Box>
        <Typography>{post.body}</Typography>
        <Box marginTop={5}>
          <Typography variant="h2">Comments</Typography>
          {comments.map((comment) => (
            <Card sx={{ marginY: "16px" }}>
              <CardContent>
                <Typography>{comment.name}</Typography>
                <Typography>{comment.email}</Typography>
                <Typography>{comment.body}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Post;
