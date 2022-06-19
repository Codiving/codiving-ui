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
    "m",
    "ml",
    "mr",
    "mt",
    "mb",
    "b",
    "bl",
    "br",
    "bt",
    "bb"
  ])
})<BoxProps>(({ p, pl, pr, pt, pb, m, ml, mr, mt, mb, b, bl, br, bt, bb }) => {
  const padding = getPadding(p, pl, pr, pt, pb);
  const margin = getMargin(m, ml, mr, mt, mb);
  const border = getBorder(b, bl, br, bt, bb);

  return {
    ...padding,
    ...margin,
    ...border
  };
});

export default memo(Box);
