import React from "react";

export const SPACING = [0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12] as const;

export const SPACING_PX = 8;

export namespace UIType {
  export type Padding = React.CSSProperties["padding"];
  export type Margin = React.CSSProperties["border"];
  export type Border = React.CSSProperties["padding"];
  export type Spacing = typeof SPACING[number];
}

interface Padding {
  p?: UIType.Padding;
  pl?: UIType.Padding;
  pr?: UIType.Padding;
  pt?: UIType.Padding;
  pb?: UIType.Padding;
}

interface Margin {
  m?: UIType.Margin;
  ml?: UIType.Margin;
  mr?: UIType.Margin;
  mt?: UIType.Margin;
  mb?: UIType.Margin;
}

interface Border {
  b?: UIType.Border;
  bl?: UIType.Border;
  br?: UIType.Border;
  bt?: UIType.Border;
  bb?: UIType.Border;
}

export interface UIProps extends Padding, Margin, Border {
  children?: React.ReactNode;
  //   component?: ElementType<any>;
}
