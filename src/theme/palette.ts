type Color =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

interface Brightness {
  light: string;
  main: string;
  dark: string;
}

type Colors = {
  [key in Color]: Brightness;
};

const blue: Colors = {
  default: {
    light: "#F2F5F8",
    main: "#DFE3E8",
    dark: "#C4CDD5"
  },
  primary: {
    light: "#49a0e7",
    main: "#006ac0",
    dark: "#0e5893"
  },
  secondary: {
    light: "#a986e8",
    main: "#7c43e3",
    dark: "#5514cb"
  },
  error: {
    light: "#ef6e64",
    main: "#ec2d1e",
    dark: "#ca1709"
  },
  warning: {
    light: "#f7a34e",
    main: "#f5810b",
    dark: "#da740c"
  },
  info: {
    light: "#6fc8f0",
    main: "#1eb1f4",
    dark: "#1590c8"
  },
  success: {
    light: "#2db933",
    main: "#06a10c",
    dark: "#07740b"
  }
};

const green: Colors = {
  default: {
    light: "#F2F5F8",
    main: "#DFE3E8",
    dark: "#C4CDD5"
  },
  primary: {
    light: "#a986e8",
    main: "#7c43e3",
    dark: "#5514cb"
  },
  secondary: {
    light: "#49a0e7",
    main: "#006ac0",
    dark: "#0e5893"
  },
  error: {
    light: "#ef6e64",
    main: "#ec2d1e",
    dark: "#ca1709"
  },
  warning: {
    light: "#f7a34e",
    main: "#f5810b",
    dark: "#da740c"
  },
  info: {
    light: "#6fc8f0",
    main: "#1eb1f4",
    dark: "#1590c8"
  },
  success: {
    light: "#2db933",
    main: "#06a10c",
    dark: "#07740b"
  }
};

export { blue, green };
export type { Colors };
