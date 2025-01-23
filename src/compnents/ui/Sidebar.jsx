import { useState } from "react";
import { Button, Layout, Menu, Tooltip } from "antd";
import { TbLogout } from "react-icons/tb";
import "./Sidebar.css";
import { SidebarItems } from "@/constants/SidebarItems";

const { Sider } = Layout;

const Sidebar = ({ setActivePage: any }) => {
  const [activeMenuItem, setActiveMenuItem] = useState("1"); // State for active menu item
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick = (e) => {
    setActiveMenuItem(e.key); // Update the active menu item state
    setActivePage(e.key);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={256}
      className=""
      style={{
        height: "100vh", // Ensure full height
        position: "sticky",
        top: 0,
        backgroundColor: "#21263C",
        overflow: "hidden", // Prevent scrollbars from appearing
        color: "#ffffff",
      }}
    >
      {/* Logo */}
      {/* <div className={`${collapsed ? "px-1 py-2" : "px-6 py-8"}`}>
        <h1
          className={`text-white ${
            collapsed
              ? "text-base text-center"
              : "text-2xl font-semibold "
          }`}
        >
          Alief Tele Health
        </h1>
      </div> */}

      <div
        style={{
          color: "white",
          fontSize: "1.2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
          backgroundColor: '#181C2E',
          padding: '10px'
        }}
      >
        Inventory
      </div>
      <div className="demo-logo-vertical" />
      <div className="">
        <Menu
          className="text-white text-2xl"
          style={{color: '#ffffff'}}
          theme="none"
          defaultSelectedKeys={[activeMenuItem]}
          mode="inline"
          items={SidebarItems()}
          onClick={handleMenuClick}
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
