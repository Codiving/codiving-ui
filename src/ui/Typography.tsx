import styled from "@emotion/styled";
import { memo } from "react";
import { Component, Variant } from "../theme/typography";
import { shouldForwardProp } from "../utils/emotion";
interface TypographyProps extends ContainerProps, React.ComponentProps<"span"> {
  className?: string;
  children?: React.ReactNode;
  component?: Component;
}

interface ContainerProps {
  cssLabel?: string;
  variant?: Variant;
  fontSize?: React.CSSProperties["fontSize"];
  cursor?: React.CSSProperties["cursor"];
  textAlign?: React.CSSProperties["textAlign"];
}

const Container = styled("span", {
  shouldForwardProp: shouldForwardProp([
    "variant",
    "fontSize",
    "cursor",
    "cssLabel",
    "textAlign",
    "as"
  ])
})<ContainerProps>(
  ({
    theme,
    variant = "body1",
    fontSize: _fontSize,
    cursor,
    cssLabel,
    textAlign
  }) => {
    const baseStyle = theme.typography[variant];
    // fontSize props로 넘어온 경우 교체
    const fontSize = _fontSize ? _fontSize : baseStyle.fontSize;

    return {
      ...baseStyle,
      fontSize,
      cursor,
      cssLabel,
      textAlign
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
