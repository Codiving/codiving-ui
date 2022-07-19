import styled from "@emotion/styled";
import { memo } from "react";
import { Height, Width } from "../utils/common";
import { shouldForwardProp } from "../utils/emotion";
import Box from "./Box";

interface StackItemProps extends React.ComponentProps<"div">, Width, Height {
  flex?: React.CSSProperties["flex"];
  opacity?: React.CSSProperties["opacity"];
  transition?: React.CSSProperties["transition"];
  background?: React.CSSProperties["background"];
}

const StackItem = styled(Box, {
  shouldForwardProp: shouldForwardProp(["flex"])
})<StackItemProps>(
  ({
    width,
    minWidth,
    maxWidth,
    fullWidth,
    height,
    minHeight,
    maxHeight,
    fullHeight,
    flex,
    transition,
    background,
    opacity
  }) => ({
    width,
    minWidth,
    maxWidth,
    fullWidth,
    height,
    minHeight,
    maxHeight,
    fullHeight,
    flex,
    transition,
    background,
    opacity
  })
);

export default memo(StackItem);
