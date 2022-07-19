import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { Stack, Typography } from "../../../ui";
import IconButton from "../../../ui/IconButton";
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
      <IconButton onClick={onClickPrev} noMargin noPadding noRipple>
        <AiOutlineCaretLeft width={20} height={20} />
      </IconButton>
      <Typography
        component="p"
        onClick={() => onClick(mode)}
        textAlign="center"
      >
        {MOVE_MODE.year === mode
          ? dObject.format("YYYY")
          : dObject.format("MM")}
      </Typography>
      <IconButton onClick={onClickAfter} noMargin noPadding noRipple>
        <AiOutlineCaretRight width={20} height={20} />
      </IconButton>
    </Stack>
  );
};

export default DatePickerMove;
