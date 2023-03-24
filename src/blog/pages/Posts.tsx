import React from "react";
import { NextPage } from "next";
import { Box, Container, Typography } from "@mui/material";
import Header from "../ui/header/Header";
import PostCard from "../ui/post-card/PostCard";

interface PostsProps {
  posts: Post[];
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h1" marginTop={8} marginBottom={8} align="center">
          Check Our Posts
        </Typography>
        <Box>
          {posts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Posts;
