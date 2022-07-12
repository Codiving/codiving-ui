import styled from "@emotion/styled";
import Button from "./Button";

const IconButton = styled(Button)(({ noPadding }) => ({
  borderRadius: "50%",
  padding: noPadding ? undefined : 10
}));

export default IconButton;
