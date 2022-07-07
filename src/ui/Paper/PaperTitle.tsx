import Box from "../Box";
import Typography from "../Typography";
import { PaperTitlePadding } from "./utils";

interface PaperTitleProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
}

const PaperTitle = (props: PaperTitleProps) => {
  const { children } = props;

  return (
    <Box p={PaperTitlePadding}>
      <Typography>{children}</Typography>
    </Box>
  );
};

export default PaperTitle;
