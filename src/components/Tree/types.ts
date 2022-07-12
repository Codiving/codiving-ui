interface Item {
  id: string;
  label: string;
  isOpen: boolean;
  pl?: number;
}

interface FileItem extends Item {
  type: "file";
}

interface FolderItem extends Item {
  type: "folder";
  children: TreeData;
}

export type TreeItem = FileItem | FolderItem;

export type TreeData = TreeItem[];
