import styled from "@emotion/styled";
import { useMemo } from "react";
import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";
import { Stack, Typography } from "../../../ui";
import Div from "../../../ui/Div";
import IconButton from "../../../ui/IconButton";
import { shouldForwardProp } from "../../../utils/emotion";
import { TreeData, TreeItem } from "../types";

const FolderButton = styled(IconButton, {
  shouldForwardProp: shouldForwardProp(["selected"])
})<{ selected: boolean }>(({ selected }) => {
  return {
    "& > svg": {
      width: 24,
      height: 24,
      color: selected ? "white" : undefined
    }
  };
});

const TreeItemText = styled(Typography, {
  shouldForwardProp: shouldForwardProp(["selected"])
})<{ selected: boolean }>(({ selected }) => {
  return {
    paddingLeft: 6,
    color: selected ? "white" : undefined
  };
});

type TreeInnerProps = TreeItem & {
  onChange: (value: TreeData) => void;
  history: number[];
  selected: number[];
  onClick: (selected: number[]) => void;
};

const TreeInnerContainer = styled(Div, {
  shouldForwardProp: shouldForwardProp(["isOpen"])
})<{ isOpen: boolean }>(({ isOpen }) => {
  if (!isOpen)
    return {
      height: "100%",
      opacity: 1
    };
  return {
    "& > :not(:first-of-type)": {
      height: 0,
      opacity: 0,
      pointerEvents: "none"
    }
  };
});

const TreeInnerItemContainer = styled(Stack, {
  shouldForwardProp: shouldForwardProp(["selected"])
})<{ selected: boolean }>(({ theme, selected }) => {
  return {
    background: selected ? theme.palette.primary.light : undefined
  };
});

const TreeInner = (props: TreeInnerProps) => {
  const {
    label,
    type,
    pl = 0,
    id,
    isOpen,
    onChange,
    history,
    selected: _selected,
    onClick
  } = props;

  const padding = useMemo(() => {
    if (type !== "folder") {
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
      data-type={isOpen}
    >
      <TreeInnerItemContainer
        label="트리-이너-아이템-컨테이너"
        padding={padding}
        alignItems="center"
        selected={selected}
      >
        {type === "folder" ? (
          <FolderButton noRipple noMargin noPadding selected={selected}>
            {isOpen ? <AiFillFolder /> : <AiFillFolderOpen />}
          </FolderButton>
        ) : (
          ""
        )}
        <TreeItemText component="p" selected={selected}>
          {label}
        </TreeItemText>
      </TreeInnerItemContainer>
      {type === "folder" &&
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
