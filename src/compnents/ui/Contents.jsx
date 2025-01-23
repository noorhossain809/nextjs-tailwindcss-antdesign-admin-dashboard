

import { Layout, theme } from "antd";
import HeaderPage from "./Header";

const { Content } = Layout;

const Contents = ({ children, activePage}) => {
  
 

  return (
    <Content style={{ minHeight: "100vh", background: "#F2F2F2" }}>
      {/* <HeaderPage activePage={activePage} /> */}
      <div className="mt-4">
        {children}
      </div>
    </Content>
  );
};

export default Contents;
