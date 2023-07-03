import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListChildComponentProps } from "react-window";

export function FeedTextareaSuggestionsRowComponent(props: ListChildComponentProps) {
  const { index, style, data } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton disableRipple onClick={(e) => data.handleClick(e)}>
        <ListItemText primary={data.suggestions[index]} />
      </ListItemButton>
    </ListItem>
  );
}
