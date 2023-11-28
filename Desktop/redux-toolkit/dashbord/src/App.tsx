
import { useRoutes } from 'react-router-dom';
import { RouteObject } from 'react-router';
import 'antd/dist/reset.css';
import './App.less';
// import './2.css'
import Menu from "./components/menu";

import routes from './router/index';
import { Layout } from 'antd';
import {  Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

function App() {
  const navigationItems = [
    {
      path: "/",
      label: "Home",
      // children: [
      //   {
      //     path: "/contact",
      //     label: "Contact",
      //   },
      // ],
    },
    {
      path: "/about",
      label: "About",
      children: [
        {
          path: "/about/contact",
          label: "Contact",
        },
      ],
    },
  ];
  const element = useRoutes(routes as RouteObject[]);
  return (
    <div className="App">
      <Layout>
        <Layout>
          <Sider>
            <div className='aside'>
              <Menu items={navigationItems}></Menu>
            </div>
          </Sider>
          <Content>{element}</Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
