import styled from "@emotion/styled";
import { memo } from "react";
import { Typography } from "../../../../ui";
import { shouldForwardProp } from "../../../../utils/emotion";

const TreeItemText = styled(Typography, {
  shouldForwardProp: shouldForwardProp(["selected"])
})<{ selected: boolean }>(({ selected }) => {
  return {
    paddingLeft: 6,
    color: selected ? "white" : undefined
  };
});

export default memo(TreeItemText);
