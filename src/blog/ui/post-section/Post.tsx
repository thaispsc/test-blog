import React from "react";
import { Typography, Link, Box } from "@mui/material";

interface PostSectionProps {
  post: Post;
  user: User;
}

export const PostSection = ({ post, user }: PostSectionProps) => {
  return (
    <Box>
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
    </Box>
  );
};

export default PostSection;
