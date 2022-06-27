import styled from "@emotion/styled";
import React, { cloneElement, isValidElement } from "react";
import { Color } from "../theme/palette";
import { Size, Variant } from "./Button";

interface ButtonGroupProps {
  children: React.ReactNode[];
  className?: string;
  variant?: Variant;
  size?: Size;
  color?: Color;
}

const Container = styled("div", {
  label: "ButtonGroup"
})(() => {
  return {
    "& > [data-ui='button']": {
      boxShadow: "none",
      // props로 noMargin을 넘겨주어도 되지만
      // css로 하는 게 더 나아 보임.
      margin: 0
    },
    "& > [data-ui='button']:first-of-type": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    "& > [data-ui='button']:last-of-type": {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderLeft: 0
    },
    "& > [data-ui='button']:not(:first-of-type, :last-of-type)": {
      borderRadius: 0,
      borderLeft: 0
    }
  };
});

const ButtonGroup = (props: ButtonGroupProps) => {
  const { children, variant, size, color = "primary", className } = props;

  return (
    <Container className={className} color={color}>
      {variant || size || color
        ? children.map((element, index) => {
            return (
              isValidElement(element) &&
              cloneElement(element, {
                key: index,
                variant: variant,
                size: size,
                color: color,
                ...element.props
              })
            );
          })
        : children}
    </Container>
  );
};

export default ButtonGroup;
