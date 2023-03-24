import React from "react";
import { NextPage } from "next";
import { Box, Container, Typography } from "@mui/material";
import Header from "../ui/header/Header";
import PostCard from "../ui/post-card/PostCard";
import PaginationComponent from "@/lib/components/PaginationComponent";

interface PostsProps {
  posts: Post[];
  page: string;
}

const Posts: NextPage<PostsProps> = ({ posts, page }) => {
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
        <PaginationComponent page={parseInt(page)} />
      </Container>
    </>
  );
};

export default Posts;
