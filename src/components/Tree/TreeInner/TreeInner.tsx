import { useMemo } from "react";
import { Button, Stack, Typography } from "../../../ui";
import Div from "../../../ui/Div";
import { TreeItem } from "../types";

const TreeInner = (props: TreeItem) => {
  const { label, type, pl = 0, id, isSelected, isOpen } = props;

  const padding = useMemo(() => `8px 8px 8px ${8 * pl}px`, [pl]);

  return (
    <Div
      label="트리-이너-컨테이너"
      onClick={e => {
        e.stopPropagation();
        console.log("# id", id, label);
      }}
    >
      <Stack
        label="트리-이너-아이템-컨테이너"
        padding={padding}
        alignItems="center"
      >
        {type === "folder" ? (
          <Button noMargin noPadding>
            {isOpen ? "열기" : "접기"}
          </Button>
        ) : (
          ""
        )}
        <Typography component="p">{label}</Typography>
      </Stack>
      {type === "folder" &&
        props.children.map(el => {
          return <TreeInner key={el.id} {...el} pl={pl + 2} />;
        })}
    </Div>
  );
};

export default TreeInner;
