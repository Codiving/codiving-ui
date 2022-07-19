import { Stack } from "../../../../ui";
import StackItem from "../../../../ui/StackItem";
import DateObject from "../../../../utils/DateObject/DateObject";
import DatePickerYearItem from "./DatePickerYearItem";
import { generatorYears, itemCount } from "./utils";

interface DatePickerYearViewProps {
  date: Date;
  onChange: (newDate: Date, modeChabge?: boolean) => void;
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
              <DatePickerYearItem
                key={year}
                dObject={newDObject}
                onChange={onChange}
              />
            );
          })}
        </Stack>
      </StackItem>
      <StackItem onClick={onClickAfter}>오</StackItem>
    </Stack>
  );
};

export default DatePickerYearView;
