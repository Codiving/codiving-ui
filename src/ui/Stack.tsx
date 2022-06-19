import styled from "@emotion/styled";
import { memo } from "react";
import { UIType } from "../utils/common";
import { shouldForwardProp } from "../utils/emotion";
import Box from "./Box";

interface StackProps {
  children?: React.ReactNode;
  display?: "flex" | "inline-flex";
  flexDirection?: React.CSSProperties["flexDirection"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  flexWrap?: React.CSSProperties["flexWrap"];
  spacing?: UIType.Spacing;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  maxWidth?: React.CSSProperties["maxWidth"];
  background?: React.CSSProperties["background"];
  backgroundColor?: React.CSSProperties["backgroundColor"];
}

const getSpacing = (
  spacing?: UIType.Spacing,
  flexDirection?: React.CSSProperties["flexDirection"]
) => {
  if (!spacing || !flexDirection) return {};

  const direction = flexDirection.includes("column")
    ? "marginTop"
    : "marginLeft";

  return {
    "& :not(:first-of-type)": {
      [direction]: spacing * 8
    }
  };
};

const Stack = styled(Box, {
  shouldForwardProp: shouldForwardProp([
    "display",
    "flexDirection",
    "justifyContent",
    "alignItems",
    "flexWrap",
    "spacing",
    "maxWidth",
    "background",
    "backgroundColor"
  ])
})<StackProps>(
  ({
    display,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    spacing,
    width,
    height,
    maxWidth,
    background,
    backgroundColor
  }) => ({
    display,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    width,
    height,
    maxWidth,
    background,
    backgroundColor,
    ...getSpacing(spacing, flexDirection)
  })
);

export default memo(Stack);

Stack.defaultProps = {
  display: "flex",
  flexDirection: "column"
};
