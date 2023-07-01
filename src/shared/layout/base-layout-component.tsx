import React from "react";
import { Box, Container } from "@mui/material";
import { color_palette, main_styles } from "shared/styles/palette";

export const BaseLayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor={color_palette.surface.surface}>
      <Container sx={{ px: main_styles.space.base_padding_container }} maxWidth="md" disableGutters>
        {children}
      </Container>
    </Box>
  );
};
