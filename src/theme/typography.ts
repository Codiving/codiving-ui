type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "overline";

interface Font {
  fontSize: React.CSSProperties["fontSize"];
  fontWeight: React.CSSProperties["fontWeight"];
  letterSpacing: React.CSSProperties["letterSpacing"];
}

type Fonts = {
  [key in Variant]: Font;
};

interface Typography extends Fonts {
  htmlFontSize: number;
}

const typography: Typography = {
  htmlFontSize: 16,
  h1: {
    fontSize: 96,
    fontWeight: 300,
    letterSpacing: -1.5
  },
  h2: {
    fontSize: 60,
    fontWeight: 300,
    letterSpacing: -0.5
  },
  h3: {
    fontSize: 48,
    fontWeight: 400,
    letterSpacing: 0
  },
  h4: {
    fontSize: 34,
    fontWeight: 400,
    letterSpacing: 0.25
  },
  h5: {
    fontSize: 24,
    fontWeight: 400,
    letterSpacing: 0
  },
  h6: {
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: 0.15
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.15
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0.1
  },
  body1: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.5
  },
  body2: {
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0.25
  },
  button: {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 1.25
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: 0.4
  },
  overline: {
    fontSize: 10,
    fontWeight: 400,
    letterSpacing: 1.5
  }
};

export { typography };
export type { Typography };
