import styled from "@emotion/styled";
import { memo } from "react";
import { Stack, Typography } from "../../../ui";

const Container = styled(Stack)(() => ({
  cursor: "pointer"
}));
interface GoToCurrentDateProps {
  onClick: () => void;
}

const GoToCurrentDate = (props: GoToCurrentDateProps) => {
  const { onClick } = props;

  return (
    <Container
      justifyContent={"center"}
      bt="1px solid"
      pt={10}
      pb={10}
      onClick={onClick}
    >
      <Typography textAlign="center" component="p">
        Go to Today
      </Typography>
    </Container>
  );
};

export default memo(GoToCurrentDate);
