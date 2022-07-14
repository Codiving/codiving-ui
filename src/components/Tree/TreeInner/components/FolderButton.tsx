import styled from "@emotion/styled";
import { memo } from "react";
import IconButton from "../../../../ui/IconButton";
import { shouldForwardProp } from "../../../../utils/emotion";

const FolderButton = styled(IconButton, {
  shouldForwardProp: shouldForwardProp(["selected"])
})<{ selected: boolean }>(({ selected }) => {
  return {
    "& > svg": {
      width: 24,
      height: 24,
      color: selected ? "white" : undefined
    }
  };
});

export default memo(FolderButton);
