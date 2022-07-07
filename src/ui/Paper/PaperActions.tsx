import styled from "@emotion/styled";
import { shouldForwardProp } from "../../utils/emotion";
import { PaperPadding as padding } from "./utils";

interface PaperActionsProps {
  position?: "begin" | "end";
}

const PaperActions = styled("div", {
  shouldForwardProp: shouldForwardProp(["position"])
})<PaperActionsProps>(({ position = "end" }) => {
  return {
    padding,
    display: "flex",
    alignItems: "center",
    justifyContent: position === "begin" ? "flex-start" : "flex-end"
  };
});

export default PaperActions;
