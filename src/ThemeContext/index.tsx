import "@emotion/react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { createContext, Dispatch, useContext, useReducer } from "react";
import { LIGHT_THEME, type Mode, Theme } from "./theme";

type Action = {
  type: "SET_MODE";
  mode: Mode;
};

type ThemeDispatch = Dispatch<Action>;

const ThemeStateContext = createContext<Theme | null>(null);
const ThemeDispatchContext = createContext<ThemeDispatch | null>(null);

function reducer(state: Theme, action: Action) {
  if (action.type === "SET_MODE") {
  }
  return state;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, LIGHT_THEME);

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <EmotionThemeProvider theme={state}>{children}</EmotionThemeProvider>
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

export function useThemeState() {
  const state = useContext(ThemeStateContext);
  if (!state) throw new Error("Cannot find ThemeProvider");
  return state;
}

export function useThemeDispatch() {
  const dispatch = useContext(ThemeDispatchContext);
  if (!dispatch) throw new Error("Cannot find ThemeProvider");
  return dispatch;
}
