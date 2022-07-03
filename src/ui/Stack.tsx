import styled from "@emotion/styled";
import { memo } from "react";
import { UIType } from "../utils/common";
import { shouldForwardProp } from "../utils/emotion";
import Box from "./Box";

interface StackProps {
  display?: "flex" | "inline-flex";
  direction?: React.CSSProperties["flexDirection"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  flexWrap?: React.CSSProperties["flexWrap"];
  spacing?: UIType.Spacing;
  crossSpacing?: UIType.Spacing;
}

const getSpacing = (
  spacing: UIType.Spacing,
  crossSpacing: UIType.Spacing,
  direction?: React.CSSProperties["flexDirection"]
) => {
  if (!direction) return {};

  const [dir, crossDir] = direction.includes("column")
    ? ["marginTop", "marginLeft"]
    : ["marginLeft", "marginTop"];

  const dirSpacing = spacing * 8;
  const crossDirSpacing = crossSpacing * 8;

  return {
    [dir]: -dirSpacing,
    [crossDir]: -crossDirSpacing,
    "& > *": {
      [dir]: dirSpacing,
      [crossDir]: crossDirSpacing
    }
  };
};

const Stack = styled(Box, {
  shouldForwardProp: shouldForwardProp([
    "display",
    "direction",
    "justifyContent",
    "alignItems",
    "flexWrap",
    "spacing",
    "crossSpacing",
    "maxWidth"
  ])
})<StackProps>(
  ({
    display = "flex",
    direction = "row",
    justifyContent,
    alignItems,
    flexWrap,
    spacing = 0,
    crossSpacing = 0
  }) => ({
    display,
    flexDirection: direction,
    justifyContent,
    alignItems,
    flexWrap,
    ...getSpacing(spacing, crossSpacing, direction)
  })
);

export default memo(Stack);

Stack.defaultProps = {
  display: "flex",
  direction: "row"
};
