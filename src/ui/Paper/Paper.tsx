import styled from "@emotion/styled";
import { shouldForwardProp } from "../../utils/emotion";

type PaperElevation = 0 | 1 | 2 | 3 | 4 | 5;
type PaperVariant = "outlined";

interface PaperProps {
  elevation?: PaperElevation;
  variant?: PaperVariant;
  square?: boolean;
}

const getPaperShadow = (elevation: PaperElevation) => {
  switch (elevation) {
    case 0:
      return "none";
    case 1:
      return "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px";
    case 2:
      return "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px";
    case 3:
      return "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px";
    case 4:
      return "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px";
    case 5:
      return "rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px";
  }
};

const Paper = styled("div", {
  shouldForwardProp: shouldForwardProp(["elevation", "variant", "square"])
})<PaperProps>(({ elevation = 2, variant, square = false }) => {
  const boxShadow = getPaperShadow(elevation);
  return {
    border: variant === "outlined" ? "1px solid rgba(0,0,0,0.12)" : undefined,
    borderRadius: square ? undefined : 4,
    boxShadow
    // padding: noPadding ? 0 : PaperPadding
    // [`${PaperContents}`]: {
    //   background: "red"
    // }
  };
});

export default Paper;
