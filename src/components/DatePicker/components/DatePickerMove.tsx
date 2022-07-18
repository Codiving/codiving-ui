import { Stack, Typography } from "../../../ui";
import Div from "../../../ui/Div";
import DateObject from "../../../utils/DateObject/DateObject";
import { MoveMode, MOVE_MODE, ViewMode } from "../types";

interface DatePickerMoveProps {
  date: Date;
  onChange: (value: Date) => void;
  mode: MoveMode;
  onClick: (value: ViewMode) => void;
}

const DatePickerMove = (props: DatePickerMoveProps) => {
  const { date, onChange, mode, onClick } = props;

  const dObject = new DateObject(date);

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
      <Div onClick={onClickPrev}>왼</Div>
      <Typography onClick={() => onClick(mode)}>
        {MOVE_MODE.year ? dObject.format("YYYY") : dObject.format("MM")}
      </Typography>
      <Div onClick={onClickAfter}>오</Div>
    </Stack>
  );
};

export default DatePickerMove;
