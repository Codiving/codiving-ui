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
    <Stack label="WeekDateText">
      {[0, 1, 2, 3, 4, 5, 6].map(item => (
        <StackItem flex={1}>
          <Typography component="p" textAlign="center">
            {startOfWeek.add(item, "day").format("dd")}
          </Typography>
        </StackItem>
      ))}
    </Stack>
  );
};

const DatePickerCalendarView = (props: DatePickerCalendarViewProps) => {
  const { date } = props;

  const dayRange = getDayRange(date);

  return (
    <Stack label="DatePickerCalendarView" direction="column">
      <WeekDateText />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {dayRange.map(day => (
          <div
            style={{ width: `${100 / 7}%`, textAlign: "center" }}
            key={day.toDateString()}
          >
            {new DateObject(day).format("DD")}
          </div>
        ))}
      </div>
    </Stack>
  );
};

export default DatePickerCalendarView;
