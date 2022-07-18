import { Typography } from "../../../../ui";
import DateObject from "../../../../utils/DateObject/DateObject";

interface DatePickerHeaderProps {
  date: Date;
}

const DatePickerHeader = (props: DatePickerHeaderProps) => {
  const { date } = props;

  return (
    <Typography component="p" textAlign="center">
      {new DateObject(date).format("YYYY/MM/DD ddd")}
    </Typography>
  );
};

export default DatePickerHeader;
