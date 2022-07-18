const MOVE_MODE = {
  year: "year",
  month: "month"
} as const;

type MoveMode = typeof MOVE_MODE[keyof typeof MOVE_MODE];

const VIEW_MODE = {
  year: "year",
  month: "month",
  calendar: "calendar"
};

type ViewMode = typeof VIEW_MODE[keyof typeof VIEW_MODE];

export { MOVE_MODE, VIEW_MODE };

export type { MoveMode, ViewMode };
