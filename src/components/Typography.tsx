import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ElementType, forwardRef, Ref } from "react";
import {
  TypographyColor,
  TypographyVariant
} from "../ThemeContext/theme/typography";

interface TypographyProps {
  color?: TypographyColor;
  align?: "inherit" | "center" | "right" | "left";
  variant?: TypographyVariant;
  noWrap?: boolean;
  component?: ElementType;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const getColor = (theme: Theme, color?: TypographyColor) => {
  if (!color) return undefined;

  if (color === "textDisabled") {
    return theme.palette.text.disabled;
  }
  if (color === "textPrimary") {
    return theme.palette.text.primary;
  }
  if (color === "textSecondary") {
    return theme.palette.text.secondary;
  }

  return theme.palette[color].main;
};

const getVariant = (theme: Theme, variant?: TypographyVariant) => {
  if (!variant) return {};
  return theme.typography[variant];
};

const StyledTypography = styled("span")<TypographyProps>(
  ({
    theme,
    color: _color,
    variant: _variant,
    align: textAlign,
    noWrap,
    style
  }) => {
    const color = getColor(theme, _color);
    const variant = getVariant(theme, _variant);

    return {
      textAlign,
      whiteSpace: noWrap ? "nowrap" : "normal",
      color,
      ...variant,
      ...style
    };
  }
);

const Typography = forwardRef<HTMLElement, TypographyProps>(function Typography(
  {
    children,
    color = "textPrimary",
    align = "inherit",
    variant = "body1",
    noWrap = false,
    component: Component = "span",
    ...props
  }: TypographyProps,
  ref: Ref<HTMLElement>
) {
  return (
    <StyledTypography
      as={Component}
      color={color}
      align={align}
      noWrap={noWrap}
      variant={variant}
      ref={ref}
      {...props}
    >
      {children}
    </StyledTypography>
  );
});

export default Typography;
