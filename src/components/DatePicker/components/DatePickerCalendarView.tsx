import { Stack, Typography } from "../../../ui";
import Grid from "../../../ui/Grid";
import DateObject from "../../../utils/DateObject/DateObject";

interface DatePickerCalendarViewProps {
  date: Date;
}

const gridTemplateColumns = `repeat(7, ${30}px)`;

const WeekDateText = () => {
  const startOfWeek = new DateObject().startOf("week");

  return (
    <Grid gridTemplateColumns={gridTemplateColumns} justifyContent="center">
      {[0, 1, 2, 3, 4, 5, 6].map(item => (
        <Stack key={item} justifyContent="center">
          <Typography>{startOfWeek.add(item, "day").format("dd")}</Typography>
        </Stack>
      ))}
    </Grid>
  );
};

const DatePickerCalendarView = (props: DatePickerCalendarViewProps) => {
  return (
    <Stack>
      <WeekDateText />
      DatePickerCalendarView
    </Stack>
  );
};

export default DatePickerCalendarView;
