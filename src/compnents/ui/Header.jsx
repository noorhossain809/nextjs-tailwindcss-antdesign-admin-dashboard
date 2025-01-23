import { Button, Layout } from "antd";
const { Header } = Layout;
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { CiSearch } from "react-icons/ci";
import ATHBreadCrumb from "./ATHBreadCrumb";

const HeaderPage = ({ activePage }) => {
  return (
    <Header style={{ background: "#ffffff" }} className="md:h-20 h-24">
      <div className="flex justify-between items-center md:gap-0 gap-2 md:pt-0 pt-2">
        <div className="flex items-center gap-4 justify-center md:mt-4">
          <div className="flex justify-center items-center ">
            
          </div>
          <div className="">
            <h2 className="text-base font-semibold text-gray-800">Dashboard</h2>
            
          </div>
        </div>
        <div
          className='flex items-center justify-center gap-4 '
        >
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <CiSearch className="w-5 h-5" />
            </span>
            <input
              className=" placeholder:text-slate-400 block bg-[#F9FBFF] md:w-56 rounded-md md:py-2 md:pl-9 pl-8 w-28 md:pr-3 h-8 shadow-sm focus:outline-none focus:border-[#E16F04] focus:ring-[#E16F04] focus:ring-1 sm:text-sm"
              placeholder="Search..."
              type="text"
              name="search"
            />
          </label>
          <div className="flex items-center gap-2">
            <span className="text-sm">Hi,</span>
            <span className="text-sm font-medium">Abrar</span>
            <div className="w-8 h-8 rounded-full bg-[#E16F04] flex items-center justify-center text-white">
              A
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderPage;
