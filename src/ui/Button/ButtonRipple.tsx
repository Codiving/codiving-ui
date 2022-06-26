import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { memo, useCallback, useState } from "react";
import { Color } from "../../theme/palette";
import useDebouncedRippleCleanUp from "./useDebouncedRippleCleanUp";

interface Props {
  duration?: number;
  color: Color;
}

interface Ripple {
  x: number;
  y: number;
  size: number;
}

const ripple = keyframes`
    to {
        opacity: 0;
        transform: scale(2);
    }
`;

const Container = styled("div")(() => ({
  position: "absolute",
  inset: 0
}));

const Span = styled("span")<Ripple & Props>(
  ({ theme, x, y, size, color: _color, duration }) => {
    const color = theme.palette[_color].main;

    return {
      position: "absolute",
      transform: "scale(0)",
      borderRadius: "100%",
      opacity: 0.75,
      top: y,
      left: x,
      width: size,
      height: size,
      backgroundColor: color,
      animation: `${ripple} ${duration}ms`
    };
  }
);

const ButtonRipple = (props: Props) => {
  const { duration = 750 } = props;
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useDebouncedRippleCleanUp(ripples.length, duration, () => {
    setRipples([]);
  });

  const onAddRipple = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const {
        width,
        height,
        x: _x,
        y: _y
      } = e.currentTarget.getBoundingClientRect();
      const { pageX, pageY, clientX, clientY } = e;

      console.log(pageX, pageY, clientX, clientY);
      const size = width > height ? width : height;

      const x = e.clientX - _x - size / 2;
      const y = e.clientY - _y - size / 2;
      const newRipple = {
        x,
        y,
        size
      };

      setRipples(prev => [...prev, newRipple]);
    },
    []
  );

  return (
    <Container onClick={onAddRipple}>
      {ripples.map((ripple, index) => {
        return (
          <Span
            key={"span" + index}
            {...ripple}
            {...props}
            duration={duration}
          />
        );
      })}
    </Container>
  );
};

export default memo(ButtonRipple);
