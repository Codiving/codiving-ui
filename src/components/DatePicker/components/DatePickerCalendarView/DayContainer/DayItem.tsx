import styled from "@emotion/styled";
import StackItem from "../../../../../ui/StackItem";

const DayItem = styled(StackItem)<{ color?: string }>(({ color }) => {
  return {
    cursor: "pointer",
    color,
    "&:hover": {
      background: "green",
      color: "white !important"
    }
  };
});

export default DayItem;
