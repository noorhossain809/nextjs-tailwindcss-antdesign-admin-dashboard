import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Link from "next/link";



const ATHBreadCrumb = ({ items }) => {
  const breadCrumbs = [
    {
      title: (
        <span className="text-sm leading-5 font-medium" style={{fontFamily: 'Inter, sans-serif'}}>
          Home
        </span>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link} >
            <span className="text-sm leading-5 " style={{fontFamily: 'Inter, sans-serif'}}>{item.label}</span>
          </Link>
        ) : (
          <span className="text-sm leading-5 text-gray-500 font-normal" style={{fontFamily: 'Inter, sans-serif'}}>{item.label}</span>
        ),
      };
    }),
  ];
  return <Breadcrumb items={breadCrumbs} separator=">" className="font-bold"></Breadcrumb>;
};

export default ATHBreadCrumb;
