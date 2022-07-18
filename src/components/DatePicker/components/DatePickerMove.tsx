import { useMemo } from "react";
import { Stack } from "../../../ui";
import DateObject from "../../../utils/DateObject/DateObject";

interface DatePickerMoveProps {
  date: Date;
  onChange: (value: Date) => void;
  mode: "year" | "month";
}

const DatePickerMove = (props: DatePickerMoveProps) => {
  const { date, onChange, mode } = props;

  const dObject = useMemo(() => new DateObject(date), [date]);

  const onClickPrev = () => {
    const newDate = dObject.subtract(1, mode).getDateObject;
    onChange(newDate);
  };

  const onClickAfter = () => {
    const newDate = dObject.add(1, mode).getDateObject;
    onChange(newDate);
  };

  return (
    <Stack spacing={2} padding={10}>
      <div onClick={onClickPrev}>왼</div>
      <div>
        {mode === "year" ? dObject.format("YYYY") : dObject.format("MM")}
      </div>
      <div onClick={onClickAfter}>오</div>
    </Stack>
  );
};

export default DatePickerMove;
