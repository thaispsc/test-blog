import React, { useEffect, useState } from "react";
import { Typography, Link, Box } from "@mui/material";
import { getUserById } from "@/blog/services/users";
import UserIcon from "../../../lib/components/UserIcon";
import CommentsIcon from "@/lib/components/CommentsIcon";

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserById(post.userId);
      setUser(userData);
    };
    fetchUser();
  }, []);

  return (
    <Link href={`/posts/${post.id}`} underline="none" color="secondary">
      <Box marginY={4}>
        <Typography variant="h2" marginY={2}>
          {post.title}
        </Typography>
        <Box display="flex" gap={2}>
          <Box display="flex" gap={1}>
            <UserIcon size={24} />
            <Typography>{user.name}</Typography>
          </Box>
          <Box display="flex" gap={1}>
            <CommentsIcon />
            <Typography>{post.comments.length} comments</Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default PostCard;
