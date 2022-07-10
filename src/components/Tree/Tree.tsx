import React from "react";
import Div from "../../ui/Div";
import { TREE_DUMMY } from "./dummy";
import { TreeItem } from "./types";

const pl = 0;

const TreeInner = (props: TreeItem) => {
  const { label, type, pl = 0, id } = props;

  return (
    <React.Fragment>
      <Div
        label="트리-이너-컨테이너"
        onClick={e => {
          e.stopPropagation();
          console.log("# id", id, label);
        }}
      >
        <p style={{ padding: `8px 8px 8px ${8 * pl}px` }}>{label}</p>
        {type === "folder" &&
          props.children.map(el => {
            return <TreeInner key={el.id} {...el} pl={pl + 2} />;
          })}
      </Div>
    </React.Fragment>
  );
};

const Tree = () => {
  return (
    <>
      {TREE_DUMMY.map(tree => {
        return <TreeInner key={tree.id} {...tree} pl={pl} />;
      })}
    </>
  );
};

export default Tree;
