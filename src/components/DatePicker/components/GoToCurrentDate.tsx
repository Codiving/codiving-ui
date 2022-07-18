import { memo } from "react";
import { Typography } from "../../../ui";

interface GoToCurrentDateProps {
  onClick: () => void;
}

const GoToCurrentDate = (props: GoToCurrentDateProps) => {
  const { onClick } = props;

  return (
    <Typography
      textAlign="center"
      cursor="pointer"
      component="p"
      onClick={onClick}
    >
      Go to Today
    </Typography>
  );
};

export default memo(GoToCurrentDate);
