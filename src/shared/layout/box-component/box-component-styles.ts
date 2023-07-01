import { Box, styled } from "@mui/material";
import { color_palette, main_styles } from "shared/styles/palette";

export const StyledBoxComponent = styled(Box)({
  padding: main_styles.space.base_padding,
  border: `1px solid ${color_palette.main.greyscale_400}`,
  borderRadius: "8px",
  background: color_palette.main.white,
});
