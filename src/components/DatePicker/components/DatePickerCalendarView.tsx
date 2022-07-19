import { Stack, Typography } from "../../../ui";
import StackItem from "../../../ui/StackItem";
import DateObject from "../../../utils/DateObject/DateObject";

const getDayRange = (date: Date) => {
  const result: Date[] = [];
  const dObject = new DateObject(date);

  let start = dObject.startOf("month").startOf("week");
  const end = dObject.endOf("month").endOf("week");

  do {
    result.push(start.getDateObject);
    start = start.add(1, "day");
  } while (start.isSameOrBefore(end));

  return result;
};

interface DatePickerCalendarViewProps {
  date: Date;
}

const WeekDateText = () => {
  const startOfWeek = new DateObject().startOf("week");

  return (
    <Stack label="WeekDateText" bt="1px solid" bb="1px solid">
      {[0, 1, 2, 3, 4, 5, 6].map((day, index) => {
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

const DatePickerCalendarView = (props: DatePickerCalendarViewProps) => {
  const { date } = props;

  const dayRange = getDayRange(date);

  return (
    <Stack label="DatePickerCalendarView" direction="column">
      <WeekDateText />
      <Stack flexWrap="wrap">
        {dayRange.map((day, index) => {
          const sunday = index % 7 === 0;
          const saturday = index % 7 === 6;
          const color = sunday ? "red" : saturday ? "blue" : undefined;

          return (
            <StackItem
              key={day.toDateString()}
              width={`${100 / 7}%`}
              padding="14px 8px"
            >
              <Typography component="p" textAlign="center" color={color}>
                {new DateObject(day).format("DD")}
              </Typography>
            </StackItem>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default DatePickerCalendarView;
