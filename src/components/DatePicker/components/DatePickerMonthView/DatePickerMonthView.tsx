import { Stack, Typography } from "../../../../ui";
import StackItem from "../../../../ui/StackItem";
import DateObject from "../../../../utils/DateObject/DateObject";

const JAN_TO_DEC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

interface DatePickerMonthViewProps {
  date: Date;
  onChange: (newDate: Date, modeChabge?: boolean) => void;
}

const DatePickerMonthView = (props: DatePickerMonthViewProps) => {
  const { date, onChange } = props;

  const dObject = new DateObject(date);

  return (
    <Stack flexWrap="wrap">
      {JAN_TO_DEC.map(month => {
        const mDObject = dObject.setMonth(month);
        return (
          <StackItem
            key={month}
            width={"33.333%"}
            padding={8}
            onClick={() => {
              onChange(mDObject.getDateObject, true);
            }}
          >
            <Typography component="p" textAlign="center">
              {mDObject.format("MMM")}
            </Typography>
          </StackItem>
        );
      })}
    </Stack>
  );
};

export default DatePickerMonthView;
