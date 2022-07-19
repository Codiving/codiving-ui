import { memo } from "react";
import { Stack, Typography } from "../../../ui";

interface GoToCurrentDateProps {
  onClick: () => void;
}

const GoToCurrentDate = (props: GoToCurrentDateProps) => {
  const { onClick } = props;

  return (
    <Stack justifyContent={"center"} bt="1px solid" pt={10} pb={10}>
      <Typography
        textAlign="center"
        cursor="pointer"
        component="p"
        onClick={onClick}
      >
        Go to Today
      </Typography>
    </Stack>
  );
};

export default memo(GoToCurrentDate);
