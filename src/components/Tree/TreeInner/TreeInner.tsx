import { useMemo } from "react";
import { Button, Stack, Typography } from "../../../ui";
import Div from "../../../ui/Div";
import { TreeData, TreeItem } from "../types";
import { AiFillFolderOpen, AiFillFolder } from "react-icons/ai";
import IconButton from "../../../ui/IconButton";
import styled from "@emotion/styled";

const FolderButton = styled(IconButton)(() => {
  return {
    "& > svg": {
      width: 24,
      height: 24
    }
  };
});

const TreeItemText = styled(Typography)(() => {
  return {
    paddingLeft: 6
  };
});

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
    id,
    isOpen,
    onChange,
    history,
    selected,
    onClick
  } = props;

  const padding = useMemo(() => {
    if (type !== "folder") {
      return `8px 8px 8px ${8 * pl + 10}px`;
    }
    return `8px 8px 8px ${8 * pl}px`;
  }, [pl, type]);

  return (
    <Div
      label="트리-이너-컨테이너"
      onClick={e => {
        e.stopPropagation();
        console.log("history", history);
      }}
    >
      <Stack
        label="트리-이너-아이템-컨테이너"
        padding={padding}
        alignItems="center"
      >
        {type === "folder" ? (
          <FolderButton noRipple noMargin noPadding>
            {isOpen ? <AiFillFolderOpen /> : <AiFillFolder />}
          </FolderButton>
        ) : (
          ""
        )}
        <TreeItemText component="p">{label}</TreeItemText>
      </Stack>
      {type === "folder" &&
        props.children.map((el, index) => {
          return (
            <TreeInner
              key={el.id}
              {...el}
              pl={pl + 2}
              onChange={onChange}
              selected={selected}
              onClick={onClick}
              history={[...history, index]}
            />
          );
        })}
    </Div>
  );
};

export default TreeInner;
