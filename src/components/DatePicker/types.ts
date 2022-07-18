const MOVE_MODE = {
  year: "year",
  month: "month"
} as const;

type MoveMode = typeof MOVE_MODE[keyof typeof MOVE_MODE];

export { MOVE_MODE };

export type { MoveMode };
