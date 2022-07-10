import { Tree } from "./types";

export const TREE_DUMMY: Tree = [
  {
    id: "1",
    label: "연예인",
    selected: false,
    type: "folder",
    children: [
      {
        id: "1-1",
        label: "남자",
        selected: false,
        type: "folder",
        children: [
          {
            id: "1-1-1",
            label: "유재석",
            selected: false,
            type: "file"
          },
          {
            id: "1-1-2",
            label: "강호동",
            selected: false,
            type: "file"
          },
          {
            id: "1-1-3",
            label: "신동엽",
            selected: false,
            type: "file"
          },
          {
            id: "1-1-4",
            label: "ETC",
            selected: false,
            type: "folder",
            children: [
              {
                id: "1-1-4-1",
                label: "은지원",
                selected: false,
                type: "file"
              },
              {
                id: "1-1-4-2",
                label: "이수근",
                selected: false,
                type: "file"
              }
            ]
          }
        ]
      },
      {
        id: "1-2",
        label: "여자",
        selected: false,
        type: "folder",
        children: [
          {
            id: "1-2-1",
            label: "이효리",
            selected: false,
            type: "file"
          },
          {
            id: "1-2-2",
            label: "김태희",
            selected: false,
            type: "file"
          },
          {
            id: "1-2-3",
            label: "전지현",
            selected: false,
            type: "file"
          }
        ]
      }
    ]
  },
  {
    id: "2",
    label: "일반인",
    selected: false,
    type: "folder",
    children: [
      {
        id: "2-1",
        label: "지기",
        selected: false,
        type: "file"
      },
      {
        id: "2-2",
        label: "지피티",
        selected: false,
        type: "file"
      }
    ]
  }
];
