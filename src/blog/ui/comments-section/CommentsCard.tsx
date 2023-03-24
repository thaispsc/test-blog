import React from "react";
import { Typography, Box, Grid, Card, CardContent, Theme } from "@mui/material";
import UserIcon from "../../../lib/components/UserIcon";
import useMediaQuery from "@mui/material/useMediaQuery";

interface CommentsCardProps {
  comment: Comment;
}

const CommentsCard = ({ comment }: CommentsCardProps) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Card
      key={comment.id}
      variant="outlined"
      sx={{ marginY: "16px", backgroundColor: "#EDEDED" }}
    >
      <Grid
        container
        paddingX={isMobile ? 0 : 4}
        display="flex"
        alignItems="center"
      >
        <Grid item xs={2} display={isMobile ? "none" : "auto"}>
          <UserIcon size={90} />
        </Grid>
        <Grid item xs={isMobile ? 12 : 10}>
          <CardContent>
            <Box display={isMobile ? "auto" : "flex"}>
              <Typography paddingRight={isMobile ? 0 : 2}>
                {comment.name}
              </Typography>
              <Typography
                paddingLeft={isMobile ? 0 : 2}
                borderLeft={isMobile ? 0 : 2}
                borderColor="#bababa"
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
