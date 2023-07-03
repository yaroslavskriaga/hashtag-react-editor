import { createTheme } from "@mui/material";
import { color_palette } from "shared/styles/palette";

export const theme = createTheme({
  typography: {
    fontFamily: "Source Sans Pro, Arial, sans-serif",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          h1: {
            fontWeight: 700,
            fontSize: "22px",
            lineHeight: "24px",
            color: color_palette.main.regular_dark,
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          span: {
            fontWeight: "bold" + " " + "!important",
          },
        },
      },
    },
  },
  palette: {
    mode: "light",
  },
});
