import styled from "@emotion/styled";
import React from "react";
import { Color } from "../../theme/palette";
import { convertHex } from "../../utils/function";
import Stack from "../Stack";
import ButtonRipple from "./ButtonRipple";

export type Variant = "contained" | "outlined" | "text";
export type Size = "small" | "medium" | "large";

interface CommonProps {
  uppercase?: boolean;
  size: Size;
  noMargin?: boolean;
  disabled?: boolean;
}

interface Props
  extends Omit<React.ComponentProps<"button">, "color" | "disabled">,
    Omit<CommonProps, "color"> {
  variant?: Variant;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color: Color;
}

const getStyles = (size: Size) => {
  if (size === "small")
    return {
      padding: "3px 9px",
      fontSize: "0.8125rem"
    };
  if (size === "medium")
    return {
      padding: "5px 15px",
      fontSize: "0.875rem"
    };
  if (size === "large")
    return {
      padding: "7px 21px",
      fontSize: "0.9375rem"
    };
};

const CommonButton = styled("button")<CommonProps>(
  ({ theme, uppercase, size, noMargin = false, disabled }) => {
    const styles = getStyles(size);

    return {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      transition: "background-color 250ms",
      textTransform: uppercase ? "uppercase" : undefined,
      //   userSelect: "none",
      outline: 0,
      border: 0,
      margin: noMargin ? undefined : 8,
      cursor: disabled ? undefined : "pointer",
      borderRadius: 4,
      ...styles
    };
  }
);

const ContainedButton = styled(CommonButton)<Props>(
  ({ theme, color: _color }) => {
    const color = theme.palette[_color].main;

    return {
      color: "white",
      backgroundColor: convertHex(color, 0.7),
      boxShadow:
        "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
      "&:hover": {
        backgroundColor: convertHex(color, 1)
      }
    };
  }
);

const OutlinedButton = styled(CommonButton)<Props>(
  ({ theme, color: _color }) => {
    const color = theme.palette[_color].main;
    return {
      color: color,
      border: `1px solid ${convertHex(color, 0.3)}`,
      backgroundColor: "transparent",
      "&:hover": {
        border: `1px solid ${convertHex(color, 0.5)}`,
        backgroundColor: convertHex(color, 0.1)
      }
    };
  }
);

const TextButton = styled(CommonButton)<Props>(({ theme, color: _color }) => {
  const color = theme.palette[_color].main;
  return {
    color: color,
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: convertHex(color, 0.04)
    }
  };
});

const getComponent = (variant: Variant) => {
  if (variant === "contained") return ContainedButton;
  if (variant === "outlined") return OutlinedButton;
  if (variant === "text") return TextButton;
  return TextButton;
};

const Button = (props: Props) => {
  const {
    variant = "text",
    type = "button",
    size = "small",
    startIcon,
    endIcon,
    children,
    color = "primary",
    ...rest
  } = props;

  const Container = getComponent(variant);
  const rippleColor = variant === "contained" ? "default" : color;
  const duration = size === "small" ? 700 : size === "medium" ? 750 : 1000;

  return (
    <Container type={type} size={size} color={color} {...rest}>
      {startIcon && <Stack>{startIcon}</Stack>}
      {children}
      {endIcon && <Stack>{endIcon}</Stack>}
      <ButtonRipple color={rippleColor} duration={duration} />
    </Container>
  );
};

export default Button;
