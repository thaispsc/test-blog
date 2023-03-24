import React from "react";
import { Typography, Box } from "@mui/material";
import CommentsCard from "./CommentsCard";

interface CommentsSectionProps {
  comments: Comment[];
}

const CommentsSection = ({ comments }: CommentsSectionProps) => {
  return (
    <Box marginTop={5}>
      <Typography variant="h2">Comments</Typography>
      {comments.map((comment) => (
        <CommentsCard comment={comment} key={comment.id} />
      ))}
    </Box>
  );
};

export default CommentsSection;
