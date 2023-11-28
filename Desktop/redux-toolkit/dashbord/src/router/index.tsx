
import { CustomProps } from "./interface"
// import { RouteObject } from 'react-router';

import Home from "../view/Home";
import About from "../view/About";
import Contact from "../view/Contact";

// type CustomRouteObject = RouteObject & CustomProps;

const routes:CustomProps[] = [
  {
    path: "/",
    label: "Home",
    index: true,
    element: <Home />, 
  },
  {
    path: "/about",
    label: "About",
    index: false,
    element: <About />,
    children: [
      {
        path: "contact",
        label: "Contact",
        index: false,
        element: <Contact />,
      },
    ],
  },
];
export default routes
  