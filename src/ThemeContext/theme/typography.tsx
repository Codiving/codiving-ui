import { Color } from ".";
import { TextColor } from "./palette";

export type TypographyVariant =
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

export type TypographyColor = Color | TextColor;

export interface Typography {
  htmlFontSize: React.CSSProperties["fontSize"];
  fontFamily: React.CSSProperties["fontFamily"];
  fontWeightLight: React.CSSProperties["fontWeight"];
  fontWeightRegular: React.CSSProperties["fontWeight"];
  fontWeightMedium: React.CSSProperties["fontWeight"];
  fontWeightBold: React.CSSProperties["fontWeight"];
  h1: {
    fontFamily: React.CSSProperties["fontFamily"];
    fontWeight: React.CSSProperties["fontWeight"];
    fontSize: React.CSSProperties["fontSize"];
    lineHeight: React.CSSProperties["lineHeight"];
    letterSpacing: React.CSSProperties["letterSpacing"];
  };
  h2: {
    fontFamily: React.CSSProperties["fontFamily"];
    fontWeight: React.CSSProperties["fontWeight"];
    fontSize: React.CSSProperties["fontSize"];
    lineHeight: React.CSSProperties["lineHeight"];
    letterSpacing: React.CSSProperties["letterSpacing"];
  };
  h3: {
    fontFamily: React.CSSProperties["fontFamily"];
    fontWeight: React.CSSProperties["fontWeight"];
    fontSize: React.CSSProperties["fontSize"];
    lineHeight: React.CSSProperties["lineHeight"];
    letterSpacing: React.CSSProperties["letterSpacing"];
  };
  h4: {
    fontFamily: React.CSSProperties["fontFamily"];
    fontWeight: React.CSSProperties["fontWeight"];
    fontSize: React.CSSProperties["fontSize"];
    lineHeight: React.CSSProperties["lineHeight"];
    letterSpacing: React.CSSProperties["letterSpacing"];
  };
  h5: {
    fontFamily: React.CSSProperties["fontFamily"];
    fontWeight: React.CSSProperties["fontWeight"];
    fontSize: React.CSSProperties["fontSize"];
    lineHeight: React.CSSProperties["lineHeight"];
    letterSpacing: React.CSSProperties["letterSpacing"];
  };
  h6: {
    fontFamily: React.CSSProperties["fontFamily"];
    fontWeight: React.CSSProperties["fontWeight"];
    fontSize: React.CSSProperties["fontSize"];
    lineHeight: React.CSSProperties["lineHeight"];
    letterSpacing: React.CSSProperties["letterSpacing"];
  };
  subtitle1: {
    fontFamily: React.CSSProperties["fontFamily"];
    fontWeight: React.CSSProperties["fontWeight"];
    fontSize: React.CSSProperties["fontSize"];
    lineHeight: React.CSSProperties["lineHeight"];
    letterSpacing: React.CSSProperties["letterSpacing"];
  };
  subtitle2: {
    fontFamily: React.CSSProperties["fontFamily"];
    fontWeight: React.CSSProperties["fontWeight"];
    fontSize: React.CSSProperties["fontSize"];
    lineHeight: React.CSSProperties["lineHeight"];
    letterSpacing: React.CSSProperties["letterSpacing"];
  };
  body1: {
    fontFamily: React.CSSProperties["fontFamily"];
    fontWeight: React.CSSProperties["fontWeight"];
    fontSize: React.CSSProperties["fontSize"];
    lineHeight: React.CSSProperties["lineHeight"];
    letterSpacing: React.CSSProperties["letterSpacing"];
  };
  body2: {
    fontFamily: React.CSSProperties["fontFamily"];
    fontWeight: React.CSSProperties["fontWeight"];
    fontSize: React.CSSProperties["fontSize"];
    lineHeight: React.CSSProperties["lineHeight"];
    letterSpacing: React.CSSProperties["letterSpacing"];
  };
  button: {
    fontFamily: React.CSSProperties["fontFamily"];
    fontWeight: React.CSSProperties["fontWeight"];
    fontSize: React.CSSProperties["fontSize"];
    lineHeight: React.CSSProperties["lineHeight"];
    letterSpacing: React.CSSProperties["letterSpacing"];
  };
  caption: {
    fontFamily: React.CSSProperties["fontFamily"];
    fontWeight: React.CSSProperties["fontWeight"];
    fontSize: React.CSSProperties["fontSize"];
    lineHeight: React.CSSProperties["lineHeight"];
    letterSpacing: React.CSSProperties["letterSpacing"];
  };
  overline: {
    fontFamily: React.CSSProperties["fontFamily"];
    fontWeight: React.CSSProperties["fontWeight"];
    fontSize: React.CSSProperties["fontSize"];
    lineHeight: React.CSSProperties["lineHeight"];
    letterSpacing: React.CSSProperties["letterSpacing"];
  };
  inherit: {
    fontFamily: React.CSSProperties["fontFamily"];
    fontWeight: React.CSSProperties["fontWeight"];
    fontSize: React.CSSProperties["fontSize"];
    lineHeight: React.CSSProperties["lineHeight"];
    letterSpacing: React.CSSProperties["letterSpacing"];
  };
}

export const TYPOGRAPHY: Typography = {
  htmlFontSize: 16,
  fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 300,
    fontSize: "6rem",
    lineHeight: 1.167,
    letterSpacing: "-0.01562em"
  },
  h2: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 300,
    fontSize: "3.75rem",
    lineHeight: 1.2,
    letterSpacing: "-0.00833em"
  },
  h3: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
    fontSize: "3rem",
    lineHeight: 1.167,
    letterSpacing: "0em"
  },
  h4: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
    fontSize: "2.125rem",
    lineHeight: 1.235,
    letterSpacing: "0.00735em"
  },
  h5: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
    fontSize: "1.5rem",
    lineHeight: 1.334,
    letterSpacing: "0em"
  },
  h6: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 500,
    fontSize: "1.25rem",
    lineHeight: 1.6,
    letterSpacing: "0.0075em"
  },
  subtitle1: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.75,
    letterSpacing: "0.00938em"
  },
  subtitle2: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.57,
    letterSpacing: "0.00714em"
  },
  body1: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "0.00938em"
  },
  body2: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.43,
    letterSpacing: "0.01071em"
  },
  button: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.75,
    letterSpacing: "0.02857em"
  },
  caption: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.66,
    letterSpacing: "0.03333em"
  },
  overline: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 2.66,
    letterSpacing: "0.08333em"
  },
  inherit: {
    fontFamily: "inherit",
    fontWeight: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit",
    letterSpacing: "inherit"
  }
};
