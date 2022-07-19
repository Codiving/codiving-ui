import styled from "@emotion/styled";
import StackItem from "../../../../../ui/StackItem";
import { shouldForwardProp } from "../../../../../utils/emotion";

const DayItem = styled(StackItem, {
  shouldForwardProp: shouldForwardProp(["width", "isSelected", "color"])
})<{ color?: string; isSelected: boolean; width: number | string }>(
  ({ color, isSelected, width }) => {
    return {
      width,
      backgroundColor: isSelected ? "#a8a8e6" : undefined,
      cursor: "pointer",
      color,
      "&:hover": {
        background: "green",
        color: "white !important"
      }
    };
  }
);

export default DayItem;
