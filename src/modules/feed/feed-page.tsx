import React from "react";
import { FeedCardComponent } from "./components/feed-card-component";
import { BoxComponent } from "shared/layout/box-component/box-component";

export const FeedPage = () => {
  return (
    <BoxComponent>
      <FeedCardComponent />
    </BoxComponent>
  );
};
