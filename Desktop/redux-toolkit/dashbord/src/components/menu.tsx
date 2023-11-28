import React from 'react';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationItem {
  path: string;
  label: string;
  children?: NavigationItem[];
}

interface NavigationBarProps {
  items: NavigationItem[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({ items }) => {
  
  const navigate = useNavigate();
  const location = useLocation();

  const generateItems = (items: NavigationItem[]): any[] =>
    items.map((item) => {
      if (item.children) {
        return {
          key: item.path,
          label: item.label,
          children: generateItems(item.children),
        };
      }
      return {
        key: item.path,
        label: item.label,
        onClick: () => navigate(item.path),
      };
    });

  return (
    <Menu mode="inline" theme="dark"  style={{ width: 200}} selectedKeys={[location.pathname]} items={generateItems(items)} />
  );
};

export default NavigationBar;
