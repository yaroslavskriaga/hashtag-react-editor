import React from "react";
import { StyledBoxComponent } from "shared/layout/box-component/box-component-styles";

export const BoxComponent = ({ children }: { children: React.ReactNode }) => {
  return <StyledBoxComponent>{children}</StyledBoxComponent>;
};
