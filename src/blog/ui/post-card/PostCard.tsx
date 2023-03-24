import React, { useEffect, useState } from "react";
import { Typography, Link, Box } from "@mui/material";
import { getUserById } from "@/blog/services/users";
import UserIcon from "../../../lib/components/UserIcon";
import CommentsIcon from "@/lib/components/CommentsIcon";
import { CustomDivider } from "@/lib/components/CustomDivider";

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

  const isUserFetched = Object.keys(user).length !== 0;

  return (
    <>
      {isUserFetched && (
        <>
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
          <CustomDivider />
        </>
      )}
    </>
  );
};

export default PostCard;
