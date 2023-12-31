import { Box } from "@mui/material";
import React from "react";

export const SpaceComponentY = ({ spacing = 4 }: { spacing?: number }) => {
  return <Box mb={spacing} />;
};

export const SpaceComponentX = ({ spacing = 4 }: { spacing?: number }) => {
  return <Box mr={spacing} />;
};
