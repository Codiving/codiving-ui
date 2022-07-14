interface Item {
  id: string;
  label: string;
  isOpen: boolean;
  pl?: number;
}

const TREE_ITEM_TYPE = {
  file: "file",
  folder: "folder"
} as const;

type TreeItemType = typeof TREE_ITEM_TYPE[keyof typeof TREE_ITEM_TYPE];

interface FileItem extends Item {
  type: "file";
}

interface FolderItem extends Item {
  type: "folder";
  children: TreeData;
}

type TreeItem = FileItem | FolderItem;

type TreeData = TreeItem[];

export { TREE_ITEM_TYPE };
export type { TreeItemType, TreeItem, TreeData };
