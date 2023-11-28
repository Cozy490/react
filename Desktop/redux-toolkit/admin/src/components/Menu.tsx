import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import routes from '../router';
import { useState } from 'react';

const items = [
  {
    label: 'Navigation One',
    key: 'about',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'home',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
]

// function Navigation() {
//   const location = useLocation();
  

//   const generateMenuItems = (routes) => {
//     return items.map((route) => {
//       if (route.children) {
//         return (
//           <Menu.SubMenu key={route.key} title={route.label}>
//             {generateMenuItems(route.children)}
//           </Menu.SubMenu>
//         );
//       }

//       return (
//         <Menu.Item key={route.key}>
//           <Link to={route.key}>{route.label}</Link>
//         </Menu.Item>
//       );
//     });
//   };

//   return (
//     <Menu mode="horizontal" items={items}>
//       {generateMenuItems(routes)}
//     </Menu>
//   );
// }
const Navigation = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Navigation;
