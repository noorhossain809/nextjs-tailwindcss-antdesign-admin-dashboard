"use client"

import { Layout, Button, Dropdown, Input, Avatar } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  SettingOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";


const { Header } = Layout;

const HeaderPage = ({ activePage }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <Header style={{ background: "#ffffff" }} className="">
       <div style={{display: "flex", justifyContent: 'space-between'}}>
        
       <div style={{display: "flex", alignItems: "center"}}>
       <Input.Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 300, }} />
       </div>

      {/* Right Section */}
      <div className="">
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </div>
      </div>
    </Header>
  );
};

export default HeaderPage;
