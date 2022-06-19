import styled from "@emotion/styled";
import { memo } from "react";
import { Component, Variant } from "../theme/typography";

interface TypographyProps extends ContainerProps {
  className?: string;
  children?: React.ReactNode;
  component?: Component;
}

interface ContainerProps {
  // } extends React.ComponentProps<"span"> {
  variant?: Variant;
  fontSize?: React.CSSProperties["fontSize"];
  cursor?: React.CSSProperties["cursor"];
}

const Container = styled("span")<ContainerProps>(
  ({ theme, variant = "body1", fontSize: _fontSize, cursor }) => {
    const baseStyle = theme.typography[variant];
    // fontSize props로 넘어온 경우 교체
    const fontSize = _fontSize ? _fontSize : baseStyle.fontSize;

    return {
      ...baseStyle,
      fontSize,
      cursor
    };
  }
);

const Typography = (props: TypographyProps) => {
  const { children, component, ...rest } = props;

  return (
    <Container as={component} {...rest}>
      {children}
    </Container>
  );
};

export default memo(Typography);

Typography.defaultProps = {
  variant: "body1",
  component: "span"
};
