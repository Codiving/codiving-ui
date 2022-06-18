import { Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { createContext, Dispatch, useContext, useReducer } from "react";
import resetCSS from "../resetCSS";
import { blue, Colors, green } from "../theme/palette";
import { Typography, typography } from "../theme/typography";

type Mode = "dark" | "light";
type Color = "blue" | "green";

declare module "@emotion/react" {
  export interface Theme {
    palette: Colors;
    color: Color;
    typography: Typography;
  }
}

interface Theme {
  palette: Colors;
  color: Color;
  typography: Typography;
}

type Action = { type: "SET_COLOR"; color: Color };

type ThemeDispatch = Dispatch<Action>;

const ThemeStateContext = createContext<Theme | null>(null);
const ThemeDispatchContext = createContext<ThemeDispatch | null>(null);

interface Props {
  children: React.ReactNode;
}

const reducer = (state: Theme, action: Action): Theme => {
  switch (action.type) {
    case "SET_COLOR":
      return {
        ...state,
        color: action.color,
        palette: action.color === "blue" ? blue : green
      };
  }
};

const ThemeProvider = (props: Props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    palette: blue,
    color: "blue",
    typography: typography
  });

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <EmotionThemeProvider theme={state}>
          <Global styles={resetCSS} />
          {children}
        </EmotionThemeProvider>
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

export default ThemeProvider;

export function useThemeState() {
  const state = useContext(ThemeStateContext);

  return state;
}

export function useThemeDispatch() {
  const dispatch = useContext(ThemeDispatchContext);

  return dispatch;
}
