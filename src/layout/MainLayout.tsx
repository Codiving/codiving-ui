import styled from "@emotion/styled";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Button, Stack, Typography } from "../ui";
import { Paper, PaperActions, PaperContents, PaperTitle } from "../ui/Paper";
import StackItem from "../ui/StackItem";

const MainLayoutContainer = styled(Stack)(() => ({}));

const Sidebar = styled(StackItem)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: 250,
  height: "100%",
  background: "blue"
}));

const MainContents = styled(StackItem)<{ sidebarOpen: boolean }>(
  ({ sidebarOpen }) => ({
    marginLeft: sidebarOpen ? 250 : 0,
    transition: "0.3s"
    // background: "red"
  })
);

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const onChangeSidebarOpen = () => setSidebarOpen(prev => !prev);

  console.log("sidebarOpen ? 250 : 0", sidebarOpen ? 250 : 0);

  return (
    <>
      <Sidebar
        width={sidebarOpen ? 250 : 0}
        opacity={sidebarOpen ? 1 : 0}
        transition="0.3s"
      >
        <Typography>하이하이하이하이하</Typography>
        <Typography>하이하이하이하이하</Typography>
        <Typography>하이하이하이하이하</Typography>
        <Typography>하이하이하이하이하</Typography>
        <Typography>하이하이하이하이하</Typography>
        <Typography>하이하이하이하이하</Typography>
        <Typography>하이하이하이하이하</Typography>
        <Typography>하이하이하이하이하</Typography>
        <Typography>하이하이하이하이하</Typography>
        <Typography>하이하이하이하이하</Typography>
      </Sidebar>

      <MainLayoutContainer minHeight="100vh">
        {/* <Sidebar
        width={sidebarOpen ? 250 : 0}
        opacity={sidebarOpen ? 1 : 0}
        transition="0.3s"
      >
       
      </Sidebar>
*/}
        <MainContents flex={1} background="#fff" sidebarOpen={sidebarOpen}>
          <div>헤더</div>
          <div>메인</div>
          <Paper>
            <PaperTitle>Paper Title</PaperTitle>
            <PaperContents>Paper Contents</PaperContents>
            <PaperActions>Paper Actions</PaperActions>
          </Paper>
          <Button variant="contained" onClick={onChangeSidebarOpen}>
            열기
          </Button>
        </MainContents>
        <Outlet />
      </MainLayoutContainer>
    </>
  );
};

export default MainLayout;
