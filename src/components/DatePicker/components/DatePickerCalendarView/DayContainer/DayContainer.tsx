import { Stack, Typography } from "../../../../../ui";
import DateObject from "../../../../../utils/DateObject/DateObject";
import DayItem from "./DayItem";

const getDayRange = (date: Date) => {
  const result: Date[] = [];
  const dObject = new DateObject(date);

  let start = dObject.startOf("month").startOf("week");
  const end = dObject.endOf("month").endOf("week");

  do {
    result.push(start.getDateObject);
    start = start.add(1, "day");
  } while (start.isSameOrBefore(end));

  return result;
};

interface DayContainerProps {
  date: Date;
  onChange: (value: Date) => void;
}

const DayContainer = (props: DayContainerProps) => {
  const { date, onChange } = props;

  const dayRange = getDayRange(date);

  const yyymmdd = new DateObject(date).format("YYYYMMDD");

  return (
    <Stack flexWrap="wrap">
      {dayRange.map((day, index) => {
        const sunday = index % 7 === 0;
        const saturday = index % 7 === 6;
        const color = sunday ? "red" : saturday ? "blue" : undefined;
        const _yyyymmdd = new DateObject(day).format("YYYYMMDD");

        return (
          <DayItem
            key={day.toDateString()}
            width={`${100 / 7}%`}
            padding="14px 8px"
            color={color}
            isSelected={yyymmdd === _yyyymmdd}
            onClick={() => {
              onChange(day);
            }}
          >
            <Typography component="p" textAlign="center">
              {new DateObject(day).format("DD")}
            </Typography>
          </DayItem>
        );
      })}
    </Stack>
  );
};

export default DayContainer;
