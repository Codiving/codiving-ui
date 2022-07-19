import { Typography } from "../../../../ui";
import StackItem from "../../../../ui/StackItem";
import DateObject from "../../../../utils/DateObject/DateObject";
import { colsCount } from "./utils";

interface DatePickerYearItemProps {
  dObject: DateObject;
  onChange: (newDate: Date, modeChange?: boolean) => void;
}

const DatePickerYearItem = (props: DatePickerYearItemProps) => {
  const { dObject, onChange } = props;

  return (
    <StackItem
      width={`calc(100% / ${colsCount})`}
      onClick={() => onChange(dObject.getDateObject, true)}
      padding={8}
    >
      <Typography component="p" textAlign="center">
        {dObject.format("YYYY")}
      </Typography>
    </StackItem>
  );
};

export default DatePickerYearItem;
