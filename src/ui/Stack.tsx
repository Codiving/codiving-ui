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
}

const getSpacing = (
  spacing?: UIType.Spacing,
  direction?: React.CSSProperties["flexDirection"]
) => {
  if (!spacing || !direction) return {};

  const dir = direction.includes("column") ? "marginTop" : "marginLeft";

  return {
    "& :not(:first-of-type)": {
      [dir]: spacing * 8
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
    "maxWidth"
  ])
})<StackProps>(
  ({ display, direction, justifyContent, alignItems, flexWrap, spacing }) => ({
    display,
    flexDirection: direction,
    justifyContent,
    alignItems,
    flexWrap,
    ...getSpacing(spacing, direction)
  })
);

export default memo(Stack);

Stack.defaultProps = {
  display: "flex",
  direction: "column"
};
