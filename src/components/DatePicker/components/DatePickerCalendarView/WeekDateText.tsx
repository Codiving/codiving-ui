import { Stack, Typography } from "../../../../ui";
import StackItem from "../../../../ui/StackItem";
import DateObject from "../../../../utils/DateObject/DateObject";

const zeroTo6 = [0, 1, 2, 3, 4, 5, 6];

const WeekDateText = () => {
  const startOfWeek = new DateObject().startOf("week");

  return (
    <Stack label="WeekDateText" bt="1px solid" bb="1px solid">
      {zeroTo6.map((day, index) => {
        const sunday = index === 0;
        const saturday = index === 6;
        const color = sunday ? "red" : saturday ? "blue" : undefined;

        return (
          <StackItem flex={1} key={day} p={8}>
            <Typography component="p" textAlign="center" color={color}>
              {startOfWeek.add(day, "day").format("dd")}
            </Typography>
          </StackItem>
        );
      })}
    </Stack>
  );
};

export default WeekDateText;
