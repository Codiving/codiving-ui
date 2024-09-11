import { DARK_PALETTE, LIGHT_PALETTE, Palette } from "./palette";
import { TYPOGRAPHY, Typography } from "./typography";

export type Mode = "light" | "dark";

interface BreakPoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const BREAK_POINTS: BreakPoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
};

type Direction = "ltr" | "rtl";

export type Color =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

declare module "@emotion/react" {
  export interface Theme {
    mode: Mode;
    breakpoints: BreakPoints;
    direction: Direction;
    palette: Palette;
    typography: Typography;
  }
}

export interface Theme {
  mode: Mode;
  breakpoints: BreakPoints;
  direction: Direction;
  palette: Palette;
  typography: Typography;
}

export const LIGHT_THEME: Theme = {
  mode: "light",
  breakpoints: BREAK_POINTS,
  direction: "ltr",
  palette: LIGHT_PALETTE,
  typography: TYPOGRAPHY
};

export const DARK_THEME: Theme = {
  mode: "dark",
  breakpoints: BREAK_POINTS,
  direction: "ltr",
  palette: DARK_PALETTE,
  typography: TYPOGRAPHY
};
