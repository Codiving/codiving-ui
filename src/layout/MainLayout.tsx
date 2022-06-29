import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div>헤더</div>
      <div>사이드바</div>
      <div>메인</div>
      <div>푸터</div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
