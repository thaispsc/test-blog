import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { Container } from "@mui/material";
import Header from "../ui/header/Header";
import { getUserById } from "../services/users";
import PostSection from "../ui/post-section/Post";
import CommentsSection from "../ui/comments-section/CommentsSection";

interface PostProps {
  post: Post;
}

const Post: NextPage<PostProps> = ({ post }) => {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserById(post.userId);
      setUser(userData);
    };
    fetchUser();
  }, []);

  const isUserFetched = Object.keys(user).length !== 0;

  return (
    <>
      <Header />
      {isUserFetched && (
        <Container maxWidth="md">
          <PostSection post={post} user={user} />
          <CommentsSection comments={post.comments} />
        </Container>
      )}
    </>
  );
};

export default Post;
