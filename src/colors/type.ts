const INTENSITY = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
type Intensity = typeof INTENSITY[number];

export type Color = {
  [key in Intensity]: string;
};
