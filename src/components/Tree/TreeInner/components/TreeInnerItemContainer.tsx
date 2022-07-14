import styled from "@emotion/styled";
import { memo } from "react";
import { Stack } from "../../../../ui";
import { shouldForwardProp } from "../../../../utils/emotion";

const TreeInnerItemContainer = styled(Stack, {
  shouldForwardProp: shouldForwardProp(["selected"])
})<{ selected: boolean }>(({ theme, selected }) => {
  return {
    background: selected ? theme.palette.primary.light : undefined
  };
});

export default memo(TreeInnerItemContainer);
