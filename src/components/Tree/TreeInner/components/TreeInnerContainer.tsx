import styled from "@emotion/styled";
import { memo } from "react";
import Div from "../../../../ui/Div";
import { shouldForwardProp } from "../../../../utils/emotion";

const TreeInnerContainer = styled(Div, {
  shouldForwardProp: shouldForwardProp(["isOpen"])
})<{ isOpen: boolean }>(({ isOpen }) => {
  if (!isOpen)
    return {
      height: "100%",
      opacity: 1
    };
  return {
    "& > :not(:first-of-type)": {
      height: 0,
      opacity: 0,
      pointerEvents: "none"
    }
  };
});

export default memo(TreeInnerContainer);
