import { Stack } from "../../../../ui";
import DayContainer from "./DayContainer";
import WeekDateText from "./WeekDateText";

interface DatePickerCalendarViewProps {
  date: Date;
  onChange: (value: Date) => void;
}

const DatePickerCalendarView = (props: DatePickerCalendarViewProps) => {
  return (
    <Stack label="DatePickerCalendarView" direction="column">
      <WeekDateText />
      <DayContainer {...props} />
    </Stack>
  );
};

export default DatePickerCalendarView;
