import { useMemo } from "react";
import { TreeData, TreeItem, TREE_ITEM_TYPE } from "../types";
import {
  TreeFolderIcon,
  TreeInnerContainer,
  TreeInnerItemContainer,
  TreeItemText
} from "./components";

type TreeInnerProps = TreeItem & {
  onChange: (value: TreeData) => void;
  history: number[];
  selected: number[];
  onClick: (selected: number[]) => void;
};

const TreeInner = (props: TreeInnerProps) => {
  const {
    label,
    type,
    pl = 0,
    isOpen,
    onChange,
    history,
    selected: _selected,
    onClick
  } = props;

  const padding = useMemo(() => {
    if (type !== TREE_ITEM_TYPE.folder) {
      return `8px 8px 8px ${8 * pl + 10}px`;
    }
    return `8px 8px 8px ${8 * pl}px`;
  }, [pl, type]);

  const selected = JSON.stringify(_selected) === JSON.stringify(history);

  return (
    <TreeInnerContainer
      label="트리-이너-컨테이너"
      onClick={e => {
        e.stopPropagation();

        onClick(history);
      }}
      isOpen={isOpen}
    >
      <TreeInnerItemContainer
        label="트리-이너-아이템-컨테이너"
        padding={padding}
        alignItems="center"
        selected={selected}
      >
        <TreeFolderIcon type={type} selected={selected} isOpen={isOpen} />
        <TreeItemText component="p" selected={selected}>
          {label}
        </TreeItemText>
      </TreeInnerItemContainer>
      {type === TREE_ITEM_TYPE.folder &&
        props.children.map((el, index) => {
          return (
            <TreeInner
              key={el.id}
              {...el}
              pl={pl + 2}
              onChange={onChange}
              selected={_selected}
              onClick={onClick}
              history={[...history, index]}
            />
          );
        })}
    </TreeInnerContainer>
  );
};

export default TreeInner;
