import styled from "@emotion/styled";
import React, { cloneElement, isValidElement } from "react";
import { Size, Variant } from "./Button";

interface ButtonGroupProps {
  children: React.ReactNode[];
  className?: string;
  variant?: Variant;
  size?: Size;
}

const Container = styled("div", {
  label: "ButtonGroup"
})(() => {
  return {
    "& > [data-ui='button']": {
      boxShadow: "none",
      // Button component에 있는 기본 margin 삭제
      // props는 noMargin
      // 그러나 noMargin을 다 쓰기엔 불필요 해보임
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
  const { children, variant, size, className } = props;

  return (
    <Container className={className}>
      {variant || size
        ? children.map((element, index) => {
            return (
              isValidElement(element) &&
              cloneElement(element, {
                key: index,
                variant: variant,
                size: size,
                ...element.props
              })
            );
          })
        : children}
    </Container>
  );
};

export default ButtonGroup;
