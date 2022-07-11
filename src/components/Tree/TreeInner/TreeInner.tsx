import { useMemo } from "react";
import { Button, Stack } from "../../../ui";
import Div from "../../../ui/Div";
import { TreeItem } from "../types";

const TreeInner = (props: TreeItem) => {
  const { label, type, pl = 0, id, isSelected } = props;

  const padding = useMemo(() => `8px 8px 8px ${8 * pl}px`, [pl]);

  return (
    <Div
      label="트리-이너-컨테이너"
      onClick={e => {
        e.stopPropagation();
        console.log("# id", id, label);
      }}
    >
      <Stack label="트리-이너-아이템-컨테이너" padding={padding}>
        <Button>접기</Button>
        <p>{label}</p>
      </Stack>
      {type === "folder" &&
        props.children.map(el => {
          return <TreeInner key={el.id} {...el} pl={pl + 2} />;
        })}
    </Div>
  );
};

export default TreeInner;
