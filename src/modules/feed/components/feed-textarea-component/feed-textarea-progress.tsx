import React from "react";
import { Box, CircularProgress, CircularProgressProps, Typography } from "@mui/material";
import { CHAR_LIMIT, normaliseValue } from "../../utils/feed-helpers";

export const CircularProgressWithLabel = (props: CircularProgressProps & { value: number }) => {
  return props.value > 0 ? (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        thickness={2}
        value={props.value >= CHAR_LIMIT ? 100 : normaliseValue(props.value)}
        size={40}
        disableShrink
        color={props.value >= CHAR_LIMIT ? "error" : "primary"}
        variant={"determinate"}
      />
      <Box position="absolute" display="flex" top="0" left="0" alignItems="center" justifyContent="center" right="0" bottom="0">
        <Typography variant="caption" component="div" color="text.secondary">
          {props.value >= CHAR_LIMIT ? CHAR_LIMIT - props.value : props.value}
        </Typography>
      </Box>
    </Box>
  ) : null;
};
