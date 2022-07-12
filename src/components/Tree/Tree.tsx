import { useState } from "react";
import { TREE_PADDING } from "../utils";
import TreeInner from "./TreeInner";
import { TreeData } from "./types";

interface TreeProps {
  value: TreeData;
  onChange: (value: TreeData) => void;
}

const Tree = (props: TreeProps) => {
  const { value, onChange } = props;

  const [selected, setSelected] = useState<number[]>([]);

  const onClick = (selected: number[]) => {
    setSelected(selected);
  };

  return (
    <>
      {value.map((tree, index) => {
        return (
          <TreeInner
            key={tree.id}
            {...tree}
            pl={TREE_PADDING}
            onChange={onChange}
            history={[index]}
            selected={selected}
            onClick={onClick}
          />
        );
      })}
    </>
  );
};

export default Tree;
