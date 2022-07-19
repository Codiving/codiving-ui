import { useEffect, useState } from "react";
import { Stack } from "../../ui";
import {
  DatePickerCalendarView,
  DatePickerHeader,
  DatePickerMonthView,
  DatePickerMove,
  DatePickerYearView,
  GoToCurrentDate
} from "./components";
import { MOVE_MODE, ViewMode, VIEW_MODE } from "./types";

interface DatePickerProps {
  value?: Date;
  onChange?: (value: Date) => void;
}

const DatePicker = (props: DatePickerProps) => {
  const { value = new Date(), onChange = () => {} } = props;

  const [date, setDate] = useState(value);
  const [mode, setMode] = useState(VIEW_MODE.calendar);

  const onChangeDate = (newDate: Date, modeChange?: boolean) => {
    setDate(newDate);

    if (modeChange) setMode(VIEW_MODE.calendar);
  };

  const onChangeMode = (newMode: ViewMode) => setMode(newMode);

  const onChangeCurrentDate = () => setDate(new Date());

  useEffect(() => {
    setDate(value);
  }, [value]);

  return (
    <Stack direction="column" b={"1px solid"}>
      <DatePickerHeader date={date} />
      <Stack justifyContent={"space-between"}>
        <DatePickerMove
          date={date}
          onChange={onChangeDate}
          mode={MOVE_MODE.year}
          onClick={onChangeMode}
        />
        <DatePickerMove
          date={date}
          onChange={onChangeDate}
          mode={MOVE_MODE.month}
          onClick={onChangeMode}
        />
      </Stack>
      {mode === VIEW_MODE.calendar && (
        <DatePickerCalendarView date={date} onChange={onChange} />
      )}
      {mode === VIEW_MODE.year && (
        <DatePickerYearView date={date} onChange={onChangeDate} />
      )}
      {mode === VIEW_MODE.month && <DatePickerMonthView />}
      <GoToCurrentDate onClick={onChangeCurrentDate} />
    </Stack>
  );
};

export default DatePicker;
