import React from "react";
import { NextPage } from "next";
import { Box, Container } from "@mui/material";
import Header from "../ui/header/Header";
import Slogan from "../ui/slogan/Slogan";
import MeetUsers from "../ui/meet-users-section/MeetUsers";
import FeaturedPosts from "../ui/featured-posts/FeaturedPosts";

interface BlogProps {
  posts: Post[];
  users: User[];
}

const Blog: NextPage<BlogProps> = ({ posts, users }) => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Slogan />
      </Container>
      <Box paddingY={8} sx={{ backgroundColor: "info.light" }}>
        <MeetUsers users={users} />
      </Box>
      <Container maxWidth="md">
        <FeaturedPosts posts={posts} />
      </Container>
    </>
  );
};

export default Blog;
