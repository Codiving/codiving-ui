import styled from "@emotion/styled";
import { shouldForwardProp } from "../utils/emotion";

interface DivProps {
  label?: string;
}

const Div = styled("div", {
  shouldForwardProp: shouldForwardProp(["label"])
})<DivProps>(({ label }) => ({ label }));

export default Div;
