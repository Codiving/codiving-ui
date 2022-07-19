import { Stack, Typography } from "../../../ui";
import StackItem from "../../../ui/StackItem";
import DateObject from "../../../utils/DateObject/DateObject";

const rowsCount = 5;
const colsCount = 4;
const itemCount = rowsCount * colsCount;

const generatorYears = (value: Date): number[] => {
  const dObject = new DateObject(value);
  const year = dObject.startOf("year").year;
  const temp = Math.floor((year % 1000) / itemCount);
  const startYear = Math.floor(year / 1000) * 1000 + itemCount * temp;

  const result = new Array(itemCount).fill(0).map((_, index) => {
    return startYear + index;
  });

  return result;
};

interface DatePickerYearViewProps {
  date: Date;
  onChange: (newDate: Date) => void;
}

const DatePickerYearView = (props: DatePickerYearViewProps) => {
  const { date, onChange } = props;

  const dObject = new DateObject(date);

  const onClickPrev = () => {
    const newDate = dObject.subtract(itemCount, "year").getDateObject;
    onChange(newDate);
  };

  const onClickAfter = () => {
    const newDate = dObject.add(itemCount, "year").getDateObject;
    onChange(newDate);
  };

  return (
    <Stack>
      <StackItem onClick={onClickPrev}>왼</StackItem>
      <StackItem flex={1}>
        <Stack flexWrap="wrap">
          {generatorYears(date).map(year => {
            const newDObject = new DateObject(date).setYear(year);
            return (
              <StackItem
                key={year}
                width={`calc(100% / ${colsCount})`}
                onClick={() => onChange(newDObject.getDateObject)}
                padding={8}
              >
                <Typography component="p" textAlign="center">
                  {newDObject.format("YYYY")}
                </Typography>
              </StackItem>
            );
          })}
        </Stack>
      </StackItem>
      <StackItem onClick={onClickAfter}>오</StackItem>
    </Stack>
  );
};

export default DatePickerYearView;
