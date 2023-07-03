import * as React from "react";
import { FixedSizeList } from "react-window";
import { Paper } from "@mui/material";
import { FeedTextareaSuggestionsRowComponent } from "./feed-textarea-suggestion-row-component";

interface FeedTextareaSuggestionsComponentInterface {
  suggestions: string[];
  onClick(event: React.MouseEvent<HTMLDivElement>): void;
}

export const FeedTextareaSuggestionsListComponent = ({ suggestions, onClick }: FeedTextareaSuggestionsComponentInterface) => {
  return (
    <Paper data-testid="feed-suggestions">
      <FixedSizeList
        itemData={{ suggestions: suggestions, handleClick: onClick }}
        height={Math.min(suggestions.length * 46, 150)}
        width={"auto"}
        itemSize={50}
        itemCount={20}
        overscanCount={5}
      >
        {FeedTextareaSuggestionsRowComponent}
      </FixedSizeList>
    </Paper>
  );
};
