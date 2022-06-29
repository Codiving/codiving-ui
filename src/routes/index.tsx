import { Fragment } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

interface IRoutes {
  title: string;
  path: string;
  component: React.ReactNode;
  children: IRoutes[];
}

const ROUTES: IRoutes[] = [
  {
    title: "theme",
    path: "theme",
    component: (
      <div>
        theme <Outlet />
      </div>
    ),
    children: [
      {
        title: "color11",
        path: "color11",
        component: (
          <div>
            theme 111
            <Outlet />
          </div>
        ),
        children: [
          {
            title: "1",
            path: "1",
            component: <div>theme 5555</div>,
            children: []
          },
          {
            title: "2",
            path: "2",
            component: <div>theme 666666</div>,
            children: []
          }
        ]
      },
      {
        title: "color22",
        path: "color22",
        component: (
          <div>
            theme 222
            <Outlet />
          </div>
        ),
        children: [
          {
            title: "color33333",
            path: "color33333",
            component: <div>theme 33333</div>,
            children: []
          },
          {
            title: "color44444",
            path: "color44444",
            component: <div>theme 44444</div>,
            children: []
          }
        ]
      }
    ]
  },
  {
    title: "ui",
    path: "ui",
    component: (
      <div>
        ui <Outlet />
      </div>
    ),
    children: [
      {
        title: "color",
        path: "color",
        component: <div>ui 222</div>,
        children: []
      }
    ]
  }
];

const Router = () => {
  const gen = (routes: IRoutes) => {
    const { children, path, component } = routes;

    if (children.length) {
      return children.map((child, index) => {
        const { path, component, children } = child;

        if (children.length)
          return (
            <Route key={index} path={path} element={component}>
              {gen(child)}
            </Route>
          );
        return <Fragment key={index}>{gen(child)}</Fragment>;
      });
    }

    return <Route path={path} element={component}></Route>;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {ROUTES.map((routes, index) => {
            const { path, component } = routes;
            return (
              <Route key={index} path={path} element={component}>
                {gen(routes)}
              </Route>
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
