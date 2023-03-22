import React from "react";
import { NextPage } from "next";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Link,
} from "@mui/material";
import Header from "../ui/header/Header";

interface PostsProps {
  posts: Post[];
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box>
          {posts.map((post) => (
            <Link href={`/posts/${post.id}`} underline="none">
              <Card sx={{ marginY: "16px" }}>
                <CardContent>
                  <Typography>{post.title}</Typography>
                  <Typography>{post.body}</Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Posts;
