import React from "react";
import { NextPage } from "next";
import { Box, Container, Typography } from "@mui/material";
import Header from "../ui/header/Header";
import PostCard from "../ui/post-card/PostCard";
import { CustomDivider } from "@/lib/components/CustomDivider";

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
            <Box key={post.id}>
              <PostCard post={post} />
              <CustomDivider />
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Posts;
