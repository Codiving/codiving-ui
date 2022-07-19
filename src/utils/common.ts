import React from "react";

export const SPACING = [0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12] as const;

export const SPACING_PX = 8;

export namespace UIType {
  export type Padding = React.CSSProperties["padding"];
  export type Margin = React.CSSProperties["margin"];
  export type Border = React.CSSProperties["border"];
  export type Spacing = typeof SPACING[number];
}

export interface Padding {
  p?: UIType.Padding;
  pl?: UIType.Padding;
  pr?: UIType.Padding;
  pt?: UIType.Padding;
  pb?: UIType.Padding;
  padding?: UIType.Padding;
}

export interface Margin {
  m?: UIType.Margin;
  ml?: UIType.Margin;
  mr?: UIType.Margin;
  mt?: UIType.Margin;
  mb?: UIType.Margin;
  margin?: UIType.Margin;
}

export interface Border {
  b?: UIType.Border;
  bl?: UIType.Border;
  br?: UIType.Border;
  bt?: UIType.Border;
  bb?: UIType.Border;
}

export interface Width {
  width?: React.CSSProperties["width"];
  minWidth?: React.CSSProperties["minWidth"];
  maxWidth?: React.CSSProperties["maxWidth"];
  fullWidth?: boolean;
}

export interface Height {
  height?: React.CSSProperties["height"];
  minHeight?: React.CSSProperties["minHeight"];
  maxHeight?: React.CSSProperties["maxHeight"];
  fullHeight?: boolean;
}

export interface UIProps extends Padding, Margin, Border, Width, Height {
  children?: React.ReactNode;
  label?: string;
  background?: React.CSSProperties["background"];
  backgroundColor?: React.CSSProperties["backgroundColor"];
  //   component?: ElementType<any>;
}
