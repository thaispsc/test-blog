import React from "react";
import { Typography, Box, Grid, Card, CardContent } from "@mui/material";
import UserIcon from "../../../lib/components/UserIcon";

interface CommentsCardProps {
  comment: Comment;
}

const CommentsCard = ({ comment }: CommentsCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{ marginY: "16px", backgroundColor: "info.light" }}
    >
      <Grid container paddingX={{ sm: 4 }} display="flex" alignItems="center">
        <Grid
          item
          xs={2}
          sx={{
            "@media (max-width: 600px)": {
              display: "none",
            },
          }}
        >
          <UserIcon size={90} />
        </Grid>
        <Grid item sm={10}>
          <CardContent>
            <Box display={{ sm: "flex" }}>
              <Typography paddingRight={{ sm: 2 }}>{comment.name}</Typography>
              <Typography
                paddingLeft={{ sm: 2 }}
                borderLeft={{ sm: 2 }}
                borderColor={{ sm: "info.main" }}
              >
                {comment.email}
              </Typography>
            </Box>
            <Typography>{comment.body}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CommentsCard;
