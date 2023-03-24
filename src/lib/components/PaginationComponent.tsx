import React from "react";
import { Box, Stack, Pagination, useMediaQuery, Theme } from "@mui/material";

interface PaginationComponentProps {
  page: number;
}

export const PaginationComponent = ({ page }: PaginationComponentProps) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    window.location.href = `/posts/${value}`;
  };

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Box marginY={4} display="flex" justifyContent="center">
      <Stack spacing={2}>
        <Pagination
          count={20}
          page={page}
          size={isMobile ? "medium" : "large"}
          variant="outlined"
          color="secondary"
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
};

export default PaginationComponent;
