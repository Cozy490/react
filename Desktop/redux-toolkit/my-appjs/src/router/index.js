import React, { lazy } from "react";
// import { createBrowserRouter } from "react-router-dom";
// import Counter from '../features/counter/Counter'
const Counter = lazy(()=>import('../features/counter/Counter'))
const Layout = lazy(()=>import('../features/Layout/Layout'))
const Courses = lazy(()=>import('../features/Courses/Courses'))
const ErrorPage = lazy(()=>import('../features/errorPage/ErrorPage'))

const router =  ([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { 
        index: true,
        element: 
          <React.Suspense fallback={<div>loading</div>}>
            <Counter />
          </React.Suspense>
      },
      {
        path: "courses",
        element:
          <React.Suspense fallback={<div>loading</div>}>
            <Courses />
          </React.Suspense>
      },
      {
        path: "*",
        element:
          <React.Suspense fallback={<div>loading</div>}>
            <ErrorPage />
          </React.Suspense>
      },
    ],
  },
]);

export default router
