import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Link,
  useMediaQuery,
  Theme,
} from "@mui/material";

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  const firstTwoPosts = posts.slice(0, 2);

  return (
    <Box marginY={8}>
      <Typography variant="h1" align="center">
        Featured Posts
      </Typography>
      <Grid
        container
        marginTop={4}
        display="flex"
        justifyContent="space-between"
      >
        {firstTwoPosts.map((post) => (
          <Grid item xs={12} sm={5} key={post.id}>
            <Box
              paddingTop="50%"
              marginY={2}
              sx={{ backgroundColor: "#bababa" }}
            ></Box>
            <Typography variant="h2" marginTop={2} align="center">
              {post.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Button variant="contained" color="info">
          <Link href="/posts/1" underline="none">
            <Typography
              color="secondary"
              textTransform="none"
              marginTop={1}
              marginX={1}
              fontWeight="bold"
            >
              Check All Posts
            </Typography>
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default FeaturedPosts;
