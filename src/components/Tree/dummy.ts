import { Tree } from "./types";

export const TREE_DUMMY: Tree = [
  {
    id: "1",
    label: "연예인",
    isSelected: false,
    isOpen: false,
    type: "folder",
    children: [
      {
        id: "1-1",
        label: "남자",
        isSelected: false,
        isOpen: false,
        type: "folder",
        children: [
          {
            id: "1-1-1",
            label: "유재석",
            isSelected: false,
            isOpen: false,
            type: "file"
          },
          {
            id: "1-1-2",
            label: "강호동",
            isSelected: false,
            isOpen: false,
            type: "file"
          },
          {
            id: "1-1-3",
            label: "신동엽",
            isSelected: false,
            isOpen: false,
            type: "file"
          },
          {
            id: "1-1-4",
            label: "ETC",
            isSelected: false,
            isOpen: false,
            type: "folder",
            children: [
              {
                id: "1-1-4-1",
                label: "은지원",
                isSelected: false,
                isOpen: false,
                type: "file"
              },
              {
                id: "1-1-4-2",
                label: "이수근",
                isSelected: false,
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
        isSelected: false,
        isOpen: false,
        type: "folder",
        children: [
          {
            id: "1-2-1",
            label: "이효리",
            isSelected: false,
            isOpen: false,
            type: "file"
          },
          {
            id: "1-2-2",
            label: "김태희",
            isSelected: false,
            isOpen: false,
            type: "file"
          },
          {
            id: "1-2-3",
            label: "전지현",
            isSelected: false,
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
    isSelected: false,
    isOpen: false,
    type: "folder",
    children: [
      {
        id: "2-1",
        label: "지기",
        isSelected: false,
        isOpen: false,
        type: "file"
      },
      {
        id: "2-2",
        label: "지피티",
        isSelected: false,
        isOpen: false,
        type: "file"
      }
    ]
  }
];
