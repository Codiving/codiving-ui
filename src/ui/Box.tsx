import styled from "@emotion/styled";
import { memo } from "react";
import { UIProps } from "../utils/common";
import { shouldForwardProp } from "../utils/emotion";
import { getBorder, getMargin, getPadding } from "../utils/function";

interface BoxProps extends UIProps {}

const Box = styled("div", {
  shouldForwardProp: shouldForwardProp([
    "p",
    "pl",
    "pr",
    "pt",
    "pb",
    // "padding",
    "m",
    "ml",
    "mr",
    "mt",
    "mb",
    // "margin",
    "b",
    "bl",
    "br",
    "bt",
    "bb",
    // "width",
    "maxWidth",
    "fullWidth",
    // "height",
    "maxHeight",
    "fullHeight",
    "cssLabel",
    // "background",
    "bgColor"
  ])
})<BoxProps>(
  ({
    p,
    pl,
    pr,
    pt,
    pb,
    padding: _padding,
    m,
    ml,
    mr,
    mt,
    mb,
    margin: _margin,
    b,
    bl,
    br,
    bt,
    bb,
    width,
    maxWidth,
    fullWidth,
    height,
    maxHeight,
    fullHeight,
    background,
    bgColor,
    cssLabel
  }) => {
    const padding = getPadding(p, pl, pr, pt, pb, _padding);
    const margin = getMargin(m, ml, mr, mt, mb, _margin);
    const border = getBorder(b, bl, br, bt, bb);

    return {
      ...padding,
      ...margin,
      ...border,
      width: fullWidth ? "100%" : width ? width : undefined,
      maxWidth: maxWidth,
      height: fullHeight ? "100%" : height ? height : undefined,
      maxHeight: maxHeight,
      background,
      backgroundColor: bgColor,
      cssLabel
    };
  }
);

export default memo(Box);
