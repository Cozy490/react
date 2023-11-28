import * as React from "react";
import About from "../page/About.tsx";
import Home from "../page/Home.tsx";

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
  },
  {
    path: '/about',
    name: 'About',
    element: <About />,
  },
];
export default routes;