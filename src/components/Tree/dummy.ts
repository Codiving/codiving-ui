import { TreeData } from "./types";

export const TREE_DUMMY: TreeData = [
  {
    id: "1",
    label: "연예인",
    isOpen: false,
    type: "folder",
    children: [
      {
        id: "1-1",
        label: "남자",
        isOpen: false,
        type: "folder",
        children: [
          {
            id: "1-1-1",
            label: "유재석",
            isOpen: false,
            type: "file"
          },
          {
            id: "1-1-2",
            label: "강호동",
            isOpen: false,
            type: "file"
          },
          {
            id: "1-1-3",
            label: "신동엽",
            isOpen: false,
            type: "file"
          },
          {
            id: "1-1-4",
            label: "ETC",
            isOpen: false,
            type: "folder",
            children: [
              {
                id: "1-1-4-1",
                label: "은지원",
                isOpen: false,
                type: "file"
              },
              {
                id: "1-1-4-2",
                label: "이수근",
                isOpen: false,
                type: "file"
              }
            ]
          }
        ]
      },
      {
        id: "1-2",
        label: "여자",
        isOpen: false,
        type: "folder",
        children: [
          {
            id: "1-2-1",
            label: "이효리",
            isOpen: false,
            type: "file"
          },
          {
            id: "1-2-2",
            label: "김태희",
            isOpen: false,
            type: "file"
          },
          {
            id: "1-2-3",
            label: "전지현",
            isOpen: false,
            type: "file"
          }
        ]
      }
    ]
  },
  {
    id: "2",
    label: "일반인",
    isOpen: false,
    type: "folder",
    children: [
      {
        id: "2-1",
        label: "지기",
        isOpen: false,
        type: "file"
      },
      {
        id: "2-2",
        label: "지피티",
        isOpen: false,
        type: "file"
      }
    ]
  }
];
