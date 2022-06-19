import styled from "@emotion/styled";
import { memo } from "react";
import { Component, typography, Variant } from "../theme/typography";

interface TypographyProps {
  className?: string;
  children?: React.ReactNode;
  variant?: Variant;
  component?: Component;
}

interface ContainerProps {
  variant: Variant;
}

const Container = styled("span")<ContainerProps>(({ variant: _variant }) => {
  const variant = _variant ? typography[_variant] : {};

  return {
    ...variant
  };
});

const Typography = (props: TypographyProps) => {
  const { children, component, variant = "body1" } = props;

  return (
    <Container as={component} variant={variant}>
      {children}
    </Container>
  );
};

export default memo(Typography);

Typography.defaultProps = {
  variant: "body1",
  component: "span"
};
