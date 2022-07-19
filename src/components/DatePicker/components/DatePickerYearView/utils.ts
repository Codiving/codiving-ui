import DateObject from "../../../../utils/DateObject/DateObject";

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

export { colsCount, itemCount, generatorYears };
