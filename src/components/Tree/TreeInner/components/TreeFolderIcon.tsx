import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";
import { memo } from "react";
import FolderButton from "./FolderButton";
import { TreeItemType, TREE_ITEM_TYPE } from "../../types";

interface TreeFolderIconProps {
  type: TreeItemType;
  selected: boolean;
  isOpen: boolean;
}

const TreeFolderIcon = (props: TreeFolderIconProps) => {
  const { type, selected, isOpen } = props;

  return (
    <>
      {type === TREE_ITEM_TYPE.folder ? (
        <FolderButton noRipple noMargin noPadding selected={selected}>
          {isOpen ? <AiFillFolder /> : <AiFillFolderOpen />}
        </FolderButton>
      ) : (
        ""
      )}
    </>
  );
};

export default memo(TreeFolderIcon);
