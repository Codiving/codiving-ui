import produce from "immer";
import { WritableDraft } from "immer/dist/internal";
import { useState } from "react";
import { TREE_PADDING } from "../utils";
import TreeInner from "./TreeInner";
import { TreeData, TreeItem } from "./types";

interface TreeProps {
  value: TreeData;
  onChange: (value: TreeData) => void;
}

const onChangeFolderState = (
  draft: WritableDraft<TreeItem>,
  history: number[]
) => {
  if (draft.type === "file") return;

  const newDraft = draft.children[history[0]];

  if (history.length) onChangeFolderState(newDraft, history.slice(1));
  if (!history.length) draft.isOpen = !draft.isOpen;
};

const Tree = (props: TreeProps) => {
  const { value, onChange } = props;

  const [selected, setSelected] = useState<number[]>([]);

  const onClick = (selected: number[]) => {
    setSelected(selected);

    const newValue = produce(value, draft => {
      onChangeFolderState(draft[selected[0]], selected.slice(1));

      return draft;
    });
    onChange(newValue);
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
