import { UIType } from "./common";

type Padding = UIType.Padding | undefined;
type Margin = UIType.Margin | undefined;
type Border = UIType.Border | undefined;

export const getPadding = (
  p: Padding,
  pl: Padding,
  pr: Padding,
  pt: Padding,
  pb: Padding,
  padding: Padding
) => {
  if (padding)
    return {
      padding: padding
    };

  const result = {
    paddingLeft: pl ? pl : p,
    paddingRight: pr ? pr : p,
    paddingTop: pt ? pt : p,
    paddingBottom: pb ? pb : p
  };

  return result;
};

export const getMargin = (
  m: Margin,
  ml: Margin,
  mr: Margin,
  mt: Margin,
  mb: Margin,
  margin: Margin
) => {
  if (margin)
    return {
      margin: margin
    };

  const result = {
    marginLeft: ml ? ml : m,
    marginRight: mr ? mr : m,
    marginTop: mt ? mt : m,
    marginBottom: mb ? mb : m
  };

  return result;
};

export const getBorder = (
  b: Border,
  bl: Border,
  br: Border,
  bt: Border,
  bb: Border
) => {
  let borderLeft;
  let borderRight;
  let borderTop;
  let borderBottom;

  if (b) {
    borderLeft = typeof b === "number" ? `${b}px solid` : b;
    borderRight = typeof b === "number" ? `${b}px solid` : b;
    borderTop = typeof b === "number" ? `${b}px solid` : b;
    borderBottom = typeof b === "number" ? `${b}px solid` : b;
  }

  if (bl) borderLeft = typeof bl === "number" ? `${bl}px solid` : bl;

  if (br) borderRight = typeof br === "number" ? `${br}px solid` : br;

  if (bt) borderTop = typeof bt === "number" ? `${bt}px solid` : bt;

  if (bb) borderBottom = typeof bb === "number" ? `${bb}px solid` : bb;

  return {
    borderLeft,
    borderRight,
    borderTop,
    borderBottom
  };
};
