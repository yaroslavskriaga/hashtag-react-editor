import React from "react";
import { BaseLayoutComponent } from "shared/layout/base-layout-component";
import { theme } from "shared/styles/theme";
import { ThemeProvider } from "@mui/material";
import { FeedPage } from "./modules/feed/feed-page";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayoutComponent>
        <FeedPage />
      </BaseLayoutComponent>
    </ThemeProvider>
  );
};
