import React from "react";
import { FeedTextareaComponent } from "./feed-textarea-component/feed-textarea-component";
import { SpaceComponentX, SpaceComponentY } from "shared/layout/space-component";
import { Box, Button } from "@mui/material";
import { CircularProgressWithLabel } from "./feed-textarea-component/feed-textarea-progress";

export const FeedCardComponent = () => {
  const [isSendingAvailable, setIsSendingAvailable] = React.useState<boolean>(false);
  const [textLength, setTextLength] = React.useState<number>(0);

  return (
    <>
      <FeedTextareaComponent setTextLength={setTextLength} setIsSendingAvailable={setIsSendingAvailable} />
      <SpaceComponentY spacing={1} />
      <Box display={"flex"} justifyContent={"end"}>
        <CircularProgressWithLabel value={textLength} />
        <SpaceComponentX spacing={1} />
        <Button disabled={!isSendingAvailable} variant="outlined">
          Send
        </Button>
      </Box>
    </>
  );
};
