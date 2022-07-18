import dayjs from "dayjs";
import { ManipulateType, OpUnitType } from "dayjs/esm";

class DateObject {
  private readonly _date = new Date();

  constructor(date?: Date) {
    if (date) {
      this._date = date;
    }
  }

  private get dayjsObject() {
    return dayjs(this._date);
  }

  public get getDateObject() {
    return this._date;
  }

  public startOf(unit: OpUnitType) {
    return new DateObject(this.dayjsObject.startOf(unit).toDate());
  }

  public endOf(unit: OpUnitType) {
    return new DateObject(this.dayjsObject.endOf(unit).toDate());
  }

  public add(value: number, unit?: ManipulateType) {
    return new DateObject(this.dayjsObject.add(value, unit).toDate());
  }

  public subtract(value: number, unit?: ManipulateType) {
    return new DateObject(this.dayjsObject.subtract(value, unit).toDate());
  }

  public format(_format: string) {
    return this.dayjsObject.format(_format);
  }
}

export default DateObject;
