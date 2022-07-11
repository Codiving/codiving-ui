import { TREE_PADDING } from "../utils";
import { TREE_DUMMY } from "./dummy";
import TreeInner from "./TreeInner";

const Tree = () => {
  return (
    <>
      {TREE_DUMMY.map(tree => {
        return <TreeInner key={tree.id} {...tree} pl={TREE_PADDING} />;
      })}
    </>
  );
};

export default Tree;
