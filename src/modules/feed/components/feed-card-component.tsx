import React from "react";
import { FeedTextareaComponent } from "./feed-textarea-component";
import { SpaceComponentY } from "shared/layout/space-component";
import { Box, Button } from "@mui/material";

export const FeedCardComponent = () => {
  return (
    <>
      <FeedTextareaComponent />
      <SpaceComponentY spacing={1} />
      <Box display={"flex"} justifyContent={"end"}>
        <Button variant="outlined">Send</Button>
      </Box>
    </>
  );
};
