import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function Error({ message }: { message?: string }) {
  return (
    <Container>
      <Box marginTop={8}>
        <Typography variant="h1" textAlign="center" marginBottom={2}>
          Something bad happened.
        </Typography>
        {message && (
          <Typography variant="h2" textAlign="center">
            {message}
          </Typography>
        )}
      </Box>
    </Container>
  );
}
