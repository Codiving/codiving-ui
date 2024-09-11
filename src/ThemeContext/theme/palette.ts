export interface Palette {
  common: {
    black: React.CSSProperties["color"];
    white: React.CSSProperties["color"];
  };
  primary: {
    main: React.CSSProperties["color"];
    light: React.CSSProperties["color"];
    dark: React.CSSProperties["color"];
    contrastText: React.CSSProperties["color"];
  };
  secondary: {
    main: React.CSSProperties["color"];
    light: React.CSSProperties["color"];
    dark: React.CSSProperties["color"];
    contrastText: React.CSSProperties["color"];
  };
  error: {
    main: React.CSSProperties["color"];
    light: React.CSSProperties["color"];
    dark: React.CSSProperties["color"];
    contrastText: React.CSSProperties["color"];
  };
  warning: {
    main: React.CSSProperties["color"];
    light: React.CSSProperties["color"];
    dark: React.CSSProperties["color"];
    contrastText: React.CSSProperties["color"];
  };
  info: {
    main: React.CSSProperties["color"];
    light: React.CSSProperties["color"];
    dark: React.CSSProperties["color"];
    contrastText: React.CSSProperties["color"];
  };
  success: {
    main: React.CSSProperties["color"];
    light: React.CSSProperties["color"];
    dark: React.CSSProperties["color"];
    contrastText: React.CSSProperties["color"];
  };
  text: {
    primary: React.CSSProperties["color"];
    secondary: React.CSSProperties["color"];
    disabled: React.CSSProperties["color"];
  };
}

export const LIGHT_PALETTE: Palette = {
  common: {
    black: "#000",
    white: "#fff"
  },
  primary: {
    main: "#1976d2",
    light: "#42a5f5",
    dark: "#1565c0",
    contrastText: "#fff"
  },
  secondary: {
    main: "#9c27b0",
    light: "#ba68c8",
    dark: "#7b1fa2",
    contrastText: "#fff"
  },
  error: {
    main: "#d32f2f",
    light: "#ef5350",
    dark: "#c62828",
    contrastText: "#fff"
  },
  warning: {
    main: "#ed6c02",
    light: "#ff9800",
    dark: "#e65100",
    contrastText: "#fff"
  },
  info: {
    main: "#0288d1",
    light: "#03a9f4",
    dark: "#01579b",
    contrastText: "#fff"
  },
  success: {
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
    contrastText: "#fff"
  },
  text: {
    primary: "rgba(0,0,0,0.87)",
    secondary: "rgba(0,0,0,0.6)",
    disabled: "rgba(0,0,0,0.38)"
  }
};

export const DARK_PALETTE: Palette = {
  common: {
    black: "#000",
    white: "#fff"
  },
  primary: {
    main: "#90caf9",
    light: "#e3f2fd",
    dark: "#42a5f5",
    contrastText: "rgba(0,0,0,0.87)"
  },
  secondary: {
    main: "#ce93d8",
    light: "#f3e5f5",
    dark: "#ab47bc",
    contrastText: "rgba(0,0,0,0.87)"
  },
  error: {
    main: "#f44336",
    light: "#ef57373",
    dark: "#d32f2f",
    contrastText: "#fff"
  },
  warning: {
    main: "#ffa726",
    light: "#ffb74d",
    dark: "#f57c00",
    contrastText: "rgba(0,0,0,0.87)"
  },
  info: {
    main: "#28b6f6",
    light: "#4fc3f7",
    dark: "#0288d1",
    contrastText: "rgba(0,0,0,0.87)"
  },
  success: {
    main: "#66bb6a",
    light: "#81c784",
    dark: "#388e3c",
    contrastText: "rgba(0,0,0,0.87)"
  },
  text: {
    primary: "rgba(0,0,0,0.87)",
    secondary: "rgba(0,0,0,0.6)",
    disabled: "rgba(0,0,0,0.38)"
  }
};

export type TextColor = "textPrimary" | "textSecondary" | "textDisabled";
