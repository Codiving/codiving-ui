import styled from "@emotion/styled";
import { memo } from "react";
import { shouldForwardProp } from "../utils/emotion";
import Box from "./Box";

interface GridProps {
  display?: "grid" | "inline-grid";
  gridTemplateColumns?: React.CSSProperties["gridTemplateColumns"];
  gridTemplateRows?: React.CSSProperties["gridTemplateRows"];
  gridAutoColumns?: React.CSSProperties["gridAutoColumns"];
  gridAutoRows?: React.CSSProperties["gridAutoRows"];
  gap?: React.CSSProperties["gap"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  justifyItems?: React.CSSProperties["justifyItems"];
}

const Grid = styled(Box, {
  shouldForwardProp: shouldForwardProp([
    "display",
    "width",
    "height",
    "maxWidth",
    "maxHeight",
    "fullWidth",
    "fullHeight",
    "gridTemplateColumns",
    "gridTemplateRows",
    "gridAutoColumns",
    "gridAutoRows",
    "gap",
    "justifyContent",
    "alignItems",
    "justifyItems"
  ])
})<GridProps>(
  ({
    display,
    width,
    height,
    maxWidth,
    maxHeight,
    fullWidth,
    fullHeight,
    gridTemplateColumns,
    gridTemplateRows,
    gridAutoColumns,
    gridAutoRows,
    gap,
    justifyContent,
    alignItems,
    justifyItems
  }) => ({
    display,
    width: fullWidth ? "100%" : height ? height : undefined,
    height: fullHeight ? "100%" : height ? height : undefined,
    maxWidth,
    maxHeight,
    gridTemplateColumns,
    gridTemplateRows,
    gridAutoColumns,
    gridAutoRows,
    gap,
    justifyContent,
    alignItems,
    justifyItems
  })
);

export default memo(Grid);
