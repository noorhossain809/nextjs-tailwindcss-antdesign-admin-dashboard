import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";

import { CiMail } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import Link from "next/link";
import {
    ProfileOutlined,
    TableOutlined,
    AppstoreOutlined,
    ScheduleOutlined,
    ThunderboltOutlined,
    CreditCardOutlined,
    FileTextOutlined,
  } from "@ant-design/icons";

export const SidebarItems = () => {
  const SidebarItems = [
    {
      label: (
        <Link href="/dashboard" style={{color: '#ffffff'}}>
          Dashboard
        </Link>
      ),
      key: "Dashboard",
      icon: <AiOutlineDashboard className="w-5 h-5" />,
    },
    {
        label: "Inventory",
        key: "inventory",
        icon: <TableOutlined />,
        children: [
          {
            label: <Link href={`/academic/faculty`} style={{color: '#ffffff'}}>Faculties</Link>,
            key: `/academic/faculty`,
          },
          {
            label: <Link href={`/academic/department`} style={{color: '#ffffff'}}>Departments</Link>,
            key: `/academic/department`,
          },
          {
            label: <Link href={`/academic/semester`} style={{color: '#ffffff'}}>Semesters</Link>,
            key: `/academic/semester`,
          },
        ],
      },
  ];
  return SidebarItems;
};
