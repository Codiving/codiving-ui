interface Item {
  id: string;
  label: string;
  isSelected: boolean;
  isOpen: boolean;
  pl?: number;
}

interface FileItem extends Item {
  type: "file";
}

interface FolderItem extends Item {
  type: "folder";
  children: Tree;
}

export type TreeItem = FileItem | FolderItem;

export type Tree = TreeItem[];
